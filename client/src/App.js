import React from "react";
import Header from "./components/Header/header";
import Hero from "./components/Hero Button/hero";
import Authentication from "./components/Authentication/authentication";
import "./App.css";

// As of right now the only loads the onboarding flow, in the future this will need
// to be changed to be a router with conditionals for user authentication to either show
// dashboard for existing users or new user flow
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Authentication />
    </div>
  );
}

export default App;
