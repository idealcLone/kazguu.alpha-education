import React from 'react';
import { Home } from './pages/Home';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
