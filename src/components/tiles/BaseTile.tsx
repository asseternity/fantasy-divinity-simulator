import { Hexagon } from 'react-hexgrid';
import WrappedText from '../../lib/word_wrapper';
import type { TileDOM } from './TileDOM';

export default function BaseTile({
  q,
  r,
  s,
  name,
  image,
  fontSize = 2,
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
      {image && <image href={image} width="8" height="8" x="-4" y="-1" />}
      <WrappedText text={name} fontSize={fontSize} />
    </Hexagon>
  );
}
