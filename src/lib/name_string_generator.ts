export async function generateFullName(): Promise<string> {
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  const vowels = 'aeiou';

  // Load suffixes from a text file in /public/data/suffixes.txt
  const suffixes = await loadSuffixes('/data/suffixes.txt');

  // Helper: generate alternating consonant-vowel string
  function generateRandomString(length: number): string {
    let result = '';
    for (let i = 0; i < length; i++) {
      if (i % 2 === 0) {
        result += consonants[Math.floor(Math.random() * consonants.length)];
      } else {
        result += vowels[Math.floor(Math.random() * vowels.length)];
      }
    }
    // Capitalize first letter
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  // First name: 2–8 letters
  const firstNameLength = Math.floor(Math.random() * (8 - 2 + 1)) + 2;
  const firstName = generateRandomString(firstNameLength);

  // Surname: 3–5 letters + random suffix
  const surnameBaseLength = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
  const surnameBase = generateRandomString(surnameBaseLength);
  const surnameSuffix =
    suffixes[Math.floor(Math.random() * suffixes.length)] ?? '';
  const surname = surnameBase + surnameSuffix;

  return `${firstName} ${surname}`;
}

// Helper: load suffixes from public/data/suffixes.txt
async function loadSuffixes(path: string): Promise<string[]> {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Failed to load suffixes');
    const text = await response.text();
    return text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  } catch (error) {
    console.error('Error loading suffixes:', error);
    // fallback suffixes if file missing
    return ['son', 'ski', 'ez', 'an', 'en'];
  }
}
