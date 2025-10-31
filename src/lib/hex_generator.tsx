import TileData from '../lib/tile_data';
import { RandomTile } from './tiles';

function generateRandomHexMap(radius: number) {
  const tiles: TileData[] = [];
  let id = 0;

  for (let q = -radius; q <= radius; q++) {
    for (let r = -radius; r <= radius; r++) {
      const s = -q - r;
      if (Math.abs(s) <= radius) {
        const TileComponent = RandomTile();
        tiles.push(new TileData(TileComponent, { q, r, s }, id++));
      }
    }
  }

  return tiles;
}

export default generateRandomHexMap;
