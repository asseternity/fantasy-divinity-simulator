import { generateFullName } from './name_string_generator';
import { pickRandomFromArray } from './json_pickers';
import geographyTypes from '../data/city/geographyTypes.json';
import { TileComponents } from '../components/tiles';
import type { BaseTileProps } from '../components/tiles/BaseTileProps';

function pickRandomTile<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// BaseTileProps = what you pass into a tile when rendering it, SO: **ONLY THINGS THAT WILL SHOW UP ON THE TILE IMAGE**
// MapTile = what you store in your map state, SO: **METADATA**
interface MapTile {
  id: number;
  Tile: React.FC<BaseTileProps>;
  coords: { q: number; r: number; s: number };
  name: string;
  description: string;
  onClick: (name: string, description: string) => void;
}

export default async function generateRandomHexMap(
  radius: number,
  onTileClick: (name: string, description: string) => void
): Promise<MapTile[]> {
  const tiles: MapTile[] = [];
  let id = 0;

  for (let q = -radius; q <= radius; q++) {
    for (let r = -radius; r <= radius; r++) {
      const s = -q - r;
      if (Math.abs(s) <= radius) {
        const randomFullName = await generateFullName();
        const firstName = randomFullName.split(' ')[0];
        const geography = pickRandomFromArray(geographyTypes);
        const finalName = `${firstName} ${geography}`;
        const Tile = pickRandomTile(TileComponents);
        const description = 'Something!';

        tiles.push({
          id: id++,
          Tile,
          coords: { q, r, s },
          name: finalName,
          description: description,
          onClick: onTileClick,
        });
      }
    }
  }

  return tiles;
}
