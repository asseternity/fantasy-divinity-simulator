import BaseTile from './BaseTile';
import type { BaseTileProps } from './BaseTileProps';

import castle from '/castle.svg';
import temple from '/temple.svg';
import forest from '/forest.svg';
import mountain from '/mountain.svg';

export const EmptyTile: React.FC<BaseTileProps> = (props) => (
  <BaseTile {...props} />
);
export const CastleTile: React.FC<BaseTileProps> = (props) => (
  <BaseTile {...props} image={castle} />
);
export const TempleTile: React.FC<BaseTileProps> = (props) => (
  <BaseTile {...props} image={temple} />
);
export const ForestTile: React.FC<BaseTileProps> = (props) => (
  <BaseTile {...props} image={forest} />
);
export const MountainTile: React.FC<BaseTileProps> = (props) => (
  <BaseTile {...props} image={mountain} />
);

export const TileComponents: React.FC<BaseTileProps>[] = [
  EmptyTile,
  CastleTile,
  TempleTile,
  MountainTile,
  ForestTile,
];
