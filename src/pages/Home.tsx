import React from 'react';
import { UpperBody } from '../components/Home/UpperBody';
import { LowerBody } from '../components/Home/LowerBody';

export const Home: React.FC = () => {
  return (
    <main>
      <UpperBody />
      <LowerBody />
    </main>
  );
};
