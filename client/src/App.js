import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header/header";
import Hero from "./components/Hero Button/hero";
import Authentication from "./components/Authentication/authentication";
import Dashboard from "./components/Dashboard/dashboard";
import "./App.css";

// As of right now the only loads the onboarding flow, in the future this will need
// to be changed to be a router with conditionals for user authentication to either show
// dashboard for existing users or new user flow
function App() {
  return ( 
    <Router>
        <Switch>
          <Route exact path="/">
            <div className="container">
      			<Header />
      			<Hero />
      			<Authentication />
    		</div>
          </Route>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="*">
            <h1>Page Not Found! Please go <Link to="/">Home!</Link></h1>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
