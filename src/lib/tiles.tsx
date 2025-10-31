import { Hexagon, Text } from 'react-hexgrid';
import mountain from '/mountain.svg';
import temple from '/temple.svg';
import forest from '/forest.svg';
import castle from '/castle.svg';

const EmptyTile = ({ q, r, s }: { q: number; r: number; s: number }) => (
  <Hexagon q={q} r={r} s={s} />
);

const CastleTile = ({ q, r, s }: { q: number; r: number; s: number }) => (
  <Hexagon q={q} r={r} s={s}>
    <Text fill="black" fontSize={3} y="-4">
      Castle
    </Text>
    <image href={castle} width="10" height="10" x="-5" y="-3" />
  </Hexagon>
);

const TempleTile = ({ q, r, s }: { q: number; r: number; s: number }) => (
  <Hexagon q={q} r={r} s={s}>
    <Text fill="black" fontSize={3} y="-4">
      Temple
    </Text>
    <image href={temple} width="10" height="10" x="-5" y="-3" />
  </Hexagon>
);

const MountainTile = ({ q, r, s }: { q: number; r: number; s: number }) => (
  <Hexagon q={q} r={r} s={s}>
    <Text fill="black" fontSize={3} y="-4">
      Mountain
    </Text>
    <image href={mountain} width="10" height="10" x="-5" />
  </Hexagon>
);

const ForestTile = ({ q, r, s }: { q: number; r: number; s: number }) => (
  <Hexagon q={q} r={r} s={s}>
    <Text fill="black" fontSize={3} y="-4">
      Forest
    </Text>
    <image href={forest} width="10" height="10" x="-5" y="-3" />
  </Hexagon>
);

const tiles = [EmptyTile, CastleTile, TempleTile, MountainTile, ForestTile];

function RandomTile() {
  const rnd: number = Math.floor(Math.random() * tiles.length);
  return tiles[rnd];
}

export { tiles, RandomTile };
