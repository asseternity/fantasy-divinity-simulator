import { useState, useEffect } from 'react';
import { HexGrid, Layout } from 'react-hexgrid';
import generateRandomHexMap from '../lib/hex_generator';

export default function HexMap() {
  const [mapTiles, setMapTiles] = useState<any[]>([]);
  const [title, setTitle] = useState('Click a tile');
  const [description, setDescription] = useState('');

  const setInfo = (given_title: string, given_description: string) => {
    setTitle(given_title);
    setDescription(given_description);
  };

  useEffect(() => {
    generateRandomHexMap(2, setInfo).then(setMapTiles);
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <HexGrid
        width={900}
        height={600}
        viewBox="-50 -50 100 100"
        style={{ fill: '#88cc88' }}
      >
        <Layout
          size={{ x: 13, y: 9 }}
          flat
          spacing={1.1}
          origin={{ x: 0, y: 0 }}
        >
          {mapTiles.map(({ id, Tile, coords, name, description, onClick }) => (
            <Tile
              key={id}
              {...coords}
              name={name}
              onClick={() => onClick(name, description)}
            />
          ))}
        </Layout>
      </HexGrid>
    </div>
  );
}
