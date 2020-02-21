import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './utils/index';
import Header from './components/Header/header';
import Hero from "./components/Hero Button/hero";
import Authentication from "./components/Authentication/authentication";

import "./App.css";

function App() {
  return (
   <Provider store={store}>
      <div>
        <div><Header /></div>
        <div><Hero /></div>
        <div><Authentication /></div>
      </div>
    </Provider>
  );
}

export default App;
