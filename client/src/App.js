import React from 'react';
import Header from './components/Header/header';
import Hero from './components/Hero Button/hero';
import Authentication from './components/Authentication/authentication';

import './App.css';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Authentication />
      </div>
    </div>
  );
}

export default App;
