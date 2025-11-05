import { Hexagon } from 'react-hexgrid';
import WrappedText from '../../lib/word_wrapper';
import type { TileDOM } from './TileDOM';

export default function BaseTile({
  q,
  r,
  s,
  name,
  image,
  fontSize = 10,
  fillColor = '#88cc88',
  onClick,
}: TileDOM) {
  return (
    <Hexagon
      q={q}
      r={r}
      s={s}
      onClick={() => onClick(name, name)}
      style={{ fill: fillColor }}
    >
      {image && <image href={image} width="40" height="40" x="-20" y="0" />}
      <WrappedText text={name} fontSize={fontSize} />
    </Hexagon>
  );
}
