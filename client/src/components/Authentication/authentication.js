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
      showSignup: true
    };
  }

  render() {
    return (
      <div className="company-auth">
        {this.state.showLogin ? (
          <div>
            <Login />
          </div>
        ) : null}
        {this.state.showSignup ? (
          <div>
            <Signup />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Authentication;
