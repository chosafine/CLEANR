import React from 'react';
import Header from './components/Header/header';
import Hero from "./components/Hero Button/hero";
import Card from "./components/Card/card";
import Authentication from "./components/Authentication/authentication";

import "./App.css";

function App() {
  return (
  
      <div>
        <div><Header /></div>
        <div><p><Hero /></p></div>
        <div><Card /></div>
        <div><Authentication /></div>
      </div>
  );
}

export default App;
