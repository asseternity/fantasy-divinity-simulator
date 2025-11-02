import { generateFullName } from './name_string_generator';
import { pickRandomFromArray } from './json_pickers';
import geographyTypes from '../data/city/geographyTypes.json';
import {
  CastleTile,
  EmptyTile,
  ForestTile,
  MountainTile,
  TempleTile,
  TileComponents,
} from '../components/tiles';
import type { TileClickHandler } from './click_event';
import type { TileDOM } from '../components/tiles/TileDOM';

function pickRandomTile<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// TileDOM = what you pass into a tile when rendering it, SO: **ONLY THINGS THAT WILL SHOW UP ON THE TILE IMAGE**
// TileMetadata = what you store in your map state, SO: **METADATA**
interface TileMetadata {
  id: number;
  Tile: React.FC<TileDOM>;
  coords: { q: number; r: number; s: number };
  name: string;
  description: string;
  geography: string;
  onClick: (name: string, description: string) => void;
}

export default async function generateRandomHexMap(
  radius: number,
  onTileClick: TileClickHandler
): Promise<TileMetadata[]> {
  const tiles: TileMetadata[] = [];
  let id = 0;

  for (let q = -radius; q <= radius; q++) {
    for (let r = -radius; r <= radius; r++) {
      const s = -q - r;
      if (Math.abs(s) <= radius) {
        const randomFullName = await generateFullName();
        const firstName = randomFullName.split(' ')[0];
        const geographyName = pickRandomFromArray(geographyTypes);
        const finalName = `${firstName} ${geographyName}`;

        const description = 'Description!';

        const Tile = pickRandomTile(TileComponents);
        let geography = 'Geography!';
        switch (Tile) {
          case CastleTile:
            geography = 'castle';
            break;
          case TempleTile:
            geography = 'temple';
            break;
          case ForestTile:
            geography = 'forest';
            break;
          case MountainTile:
            geography = 'mountain';
            break;
          default:
            geography = 'plains';
            break;
        }

        tiles.push({
          id: id++,
          Tile,
          coords: { q, r, s },
          name: finalName,
          description: description,
          geography: geography,
          onClick: onTileClick,
        });
      }
    }
  }

  return tiles;
}
