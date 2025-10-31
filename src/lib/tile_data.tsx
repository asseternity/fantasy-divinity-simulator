export default class TileData {
  tile: React.FC<{
    q: number;
    r: number;
    s: number;
    name: string;
    details: string;
  }>;
  coords: { q: number; r: number; s: number };
  id: number;
  name: string;
  details: string;

  constructor(
    tile: React.FC<{
      q: number;
      r: number;
      s: number;
      name: string;
      details: string;
    }>,
    coords: { q: number; r: number; s: number },
    id: number,
    name: string,
    details: string
  ) {
    this.tile = tile;
    this.coords = coords;
    this.id = id;
    this.name = name;
    this.details = details;
  }
}
