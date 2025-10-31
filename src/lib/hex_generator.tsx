// libraries
import { Hexagon, Text } from 'react-hexgrid';

// utils
import TileData from '../lib/tile_data';
import { generateFullName } from './name_string_generator';
import { pickRandomFromArray, pickRandomUpperAndInner } from './json_pickers';
import WrappedText from './word_wrapper';

// images
import mountain from '/mountain.svg';
import temple from '/temple.svg';
import forest from '/forest.svg';
import castle from '/castle.svg';

// jsons
import geographyTypes from '../data/city/geographyTypes.json';

// set data
const fontSize: number = 2;

const EmptyTile = ({
  q,
  r,
  s,
  name,
  details,
}: {
  q: number;
  r: number;
  s: number;
  name: string;
  details: string;
}) => <Hexagon q={q} r={r} s={s} />;

const CastleTile = ({
  q,
  r,
  s,
  name,
  details,
}: {
  q: number;
  r: number;
  s: number;
  name: string;
  details: string;
}) => (
  <Hexagon q={q} r={r} s={s}>
    <image href={castle} width="8" height="8" x="-4" y="-1" />
    <WrappedText text={name} fontSize={fontSize} />
  </Hexagon>
);

const TempleTile = ({
  q,
  r,
  s,
  name,
  details,
}: {
  q: number;
  r: number;
  s: number;
  name: string;
  details: string;
}) => (
  <Hexagon q={q} r={r} s={s}>
    <image href={temple} width="8" height="8" x="-4" y="-1" />
    <WrappedText text={name} fontSize={fontSize} />
  </Hexagon>
);

const MountainTile = ({
  q,
  r,
  s,
  name,
  details,
}: {
  q: number;
  r: number;
  s: number;
  name: string;
  details: string;
}) => (
  <Hexagon q={q} r={r} s={s}>
    <image href={mountain} width="10" height="10" x="-5" />
    <WrappedText text={name} fontSize={fontSize} />
  </Hexagon>
);

const ForestTile = ({
  q,
  r,
  s,
  name,
  details,
}: {
  q: number;
  r: number;
  s: number;
  name: string;
  details: string;
}) => (
  <Hexagon q={q} r={r} s={s}>
    <image href={forest} width="8" height="8" x="-4" y="-1" />
    <WrappedText text={name} fontSize={fontSize} />
  </Hexagon>
);

const tiles = [EmptyTile, CastleTile, TempleTile, MountainTile, ForestTile];

async function generateRandomHexMap(radius: number) {
  const chosen_tiles: TileData[] = [];
  let id = 0;

  for (let q = -radius; q <= radius; q++) {
    for (let r = -radius; r <= radius; r++) {
      const s = -q - r;
      if (Math.abs(s) <= radius) {
        const randomFullName: string = await generateFullName();
        const randomFirstName: string = randomFullName.split(' ')[0];
        const randomGeographyType = pickRandomFromArray(geographyTypes);
        const finalName = randomFirstName + ' ' + randomGeographyType;
        const rnd: number = Math.floor(Math.random() * tiles.length);
        const TileComponent = tiles[rnd];
        chosen_tiles.push(
          new TileData(
            TileComponent,
            { q, r, s },
            id++,
            finalName,
            'description'
          )
        );
      }
    }
  }

  return chosen_tiles;
}

export default generateRandomHexMap;
