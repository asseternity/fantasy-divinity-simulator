import { useMemo } from 'react';
import { HexGrid, Layout } from 'react-hexgrid';
import generateRandomHexMap from '../lib/hex_generator';

export default function HexComponent() {
  const mapTiles = useMemo(() => generateRandomHexMap(2), []);

  return (
    <div>
      <HexGrid
        width={800}
        height={500}
        viewBox="-50 -50 100 100"
        style={{ fill: '#88cc88' }}
      >
        <Layout
          size={{ x: 10, y: 10 }}
          flat={true}
          spacing={1.1}
          origin={{ x: 0, y: 0 }}
        >
          {mapTiles.map(({ tile: Tile, coords, id }) => (
            <Tile key={id} {...coords} />
          ))}
        </Layout>
      </HexGrid>
    </div>
  );
}
