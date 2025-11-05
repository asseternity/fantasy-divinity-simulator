import type { TileClickHandler } from '../lib/click_event';
import { useState, useEffect } from 'react';
import { HexGrid, Layout } from 'react-hexgrid';
import generateRandomHexMap from '../lib/hex_generator';
import { Button } from '@/components/ui/button';

export default function HexMap() {
  const [mapTiles, setMapTiles] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const setInfo: TileClickHandler = (given_title, given_description) => {
    setTitle(given_title);
    setDescription(given_description);
  };

  useEffect(() => {
    generateRandomHexMap(2, setInfo).then(setMapTiles);
  }, []);

  return (
    <div>
      <div className="border-2 h-15 flex flex-row gap-5 items-center p-5 text-2xl">
        <h1>Province: {title}</h1>
        <p>|</p>
        <h3>Resources: {description}</h3>
      </div>
      <div className="border-2 flex justify-center items-center">
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
            {mapTiles.map(
              ({
                id,
                Tile,
                coords,
                name,
                description,
                favor,
                awareness,
                resources,
                population,
                fillColor,
                onClick,
              }) => {
                let all_data = `Favor: ${favor.toString()} | Awareness: ${awareness.toString()} | Resources: ${resources.toString()} | Population: ${population.toString()}`;
                return (
                  <Tile
                    key={id}
                    {...coords}
                    name={name}
                    fillColor={fillColor}
                    onClick={() => onClick(name, all_data)}
                  />
                );
              }
            )}
          </Layout>
        </HexGrid>
      </div>
      <div className="border-2 h-15">
        <Button className="w-full h-full">End Turn</Button>
      </div>
    </div>
  );
}
