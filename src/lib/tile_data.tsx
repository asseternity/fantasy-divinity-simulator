export default class TileData {
  tile: React.FC<{ q: number; r: number; s: number }>;
  coords: { q: number; r: number; s: number };
  id: number;

  constructor(
    tile: React.FC<{ q: number; r: number; s: number }>,
    coords: { q: number; r: number; s: number },
    id: number
  ) {
    this.tile = tile;
    this.coords = coords;
    this.id = id;
  }
}
