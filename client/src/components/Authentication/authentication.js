import React from "react";
import "./authentication.css";
import Login from "./login";
import Signup from "./signup";

// This is a dummy authentication card, TBA actual user authentication.
class Authentication extends React.Component {
  constructor() {
    super();

    this.state = {
      showLogin: false,
      showSignup: false
    };
  }

  displayLogin = () => {
    this.setState({
      showLogin: !this.state.showLogin
    });
  };

  displaySignup = () => {
    this.setState({
      showSignup: !this.state.showSignup
    });
  };

  render() {
    let authenticationPage = null;

    if (this.state.showLogin) {
      authenticationPage = (
        <div className="center company-auth">
          <Login />
        </div>
      );
    } else if (this.state.showSignup) {
      authenticationPage = (
        <div className="center company-auth">
          <Signup />
        </div>
      );
    } else {
      authenticationPage = (
        <div className="center company-auth">
          <button
            type="button"
            className="btn btn-secondary"
            style={{margin: '10px'}}
            onClick={this.displaySignup}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            style={{margin: '10px'}}
            onClick={this.displayLogin}
          >
            Login
          </button>
        </div>
    );
  }
  
   return <div>{authenticationPage}</div>;
   }
}

export default Authentication;
