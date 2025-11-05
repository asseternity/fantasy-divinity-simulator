import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HexMap from './components/HexMap.tsx';
import './globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HexMap />
  </StrictMode>
);
