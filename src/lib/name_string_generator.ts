import suffixes from '../data/suffixes.json';
import { pickRandomFromArray } from './json_pickers';

export async function generateFullName(): Promise<string> {
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  const vowels = 'aeiou';

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
  const surnameSuffix = pickRandomFromArray(suffixes);
  const surname = surnameBase + surnameSuffix;

  return `${firstName} ${surname}`;
}
