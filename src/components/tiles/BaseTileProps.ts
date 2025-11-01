import type { TileClickHandler } from '../../lib/click_event';

export interface BaseTileProps {
  q: number;
  r: number;
  s: number;
  name: string;
  image?: string;
  fontSize?: number;
  onClick: TileClickHandler;
}
