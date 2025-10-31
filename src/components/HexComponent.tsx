// libraries
import { useState, useEffect } from 'react';
import { HexGrid, Layout } from 'react-hexgrid';

// utils
import TileData from '../lib/tile_data';
import generateRandomHexMap from '../lib/hex_generator';

export default function HexComponent() {
  const [mapTiles, setMapTiles] = useState<TileData[]>([]);

  useEffect(() => {
    async function loadMap() {
      const tiles = await generateRandomHexMap(2);
      setMapTiles(tiles);
    }
    loadMap();
  }, []);

  return (
    <div>
      <HexGrid
        width={900}
        height={600}
        viewBox="-50 -50 100 100"
        style={{ fill: '#88cc88' }}
      >
        <Layout
          size={{ x: 13, y: 9 }}
          flat={true}
          spacing={1.1}
          origin={{ x: 0, y: 0 }}
        >
          {mapTiles.map(({ tile: Tile, coords, id, name, details }) => (
            <Tile key={id} {...coords} name={name} details={details} />
          ))}
        </Layout>
      </HexGrid>
    </div>
  );
}
