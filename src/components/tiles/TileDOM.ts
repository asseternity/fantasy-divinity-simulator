import type { TileClickHandler } from '../../lib/click_event';

export interface TileDOM {
  q: number;
  r: number;
  s: number;
  name: string;
  image?: string;
  fontSize?: number;
  fillColor?: string;
  onClick: TileClickHandler;
}
