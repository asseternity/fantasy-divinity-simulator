import { Text } from 'react-hexgrid';

export default function WrappedText({
  text,
  fontSize,
  lineHeight = 3,
}: {
  text: string;
  fontSize: number;
  lineHeight?: number;
}) {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  // Simple greedy line splitter (around ~8 chars per line)
  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length > 8) {
      lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine += ' ' + word;
    }
  }
  if (currentLine) lines.push(currentLine.trim());

  return (
    <Text
      fill="black"
      fontSize={fontSize}
      fontFamily="Arial"
      fontWeight={600}
      y={-3 - (lines.length - 1) * (lineHeight / 2)}
    >
      {lines.map((line, i) => (
        <tspan key={i} x="0" dy={i === 0 ? 0 : lineHeight}>
          {line}
        </tspan>
      ))}
    </Text>
  );
}
