export interface BaseTileProps {
  q: number;
  r: number;
  s: number;
  name: string;
  image?: string;
  fontSize?: number;
  onClick: (name: string, descrtiption: string) => void;
}
