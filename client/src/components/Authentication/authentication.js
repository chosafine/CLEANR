import React from "react";
import "./authentication.css";
import Login from "./login";
import Signup from "./signup";
import DashboardButton from "./dashboard-button";
import cookie from "react-cookie";

// This is a dummy authentication card, TBA actual user authentication.
class Authentication extends React.Component {
  constructor() {
    super();

    this.state = {
      showLogin: false,
      showSignup: false
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = () => {
    this.setState({
      showLogin: false,
      showSignup: false
    });
  };

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

  displayReset = () => {
    this.setState({
      showLogin: false,
      showSignup: false
    });
  };

  render() {
    // getting session every time component loads so we can render link to dashboard if user is logged in
    const session = cookie.load("connect.sid");

    const goBack = (
      <button
        type="button"
        className="btn btn-dark mb-2"
        onClick={this.displayReset}
      >
        Go Back!
      </button>
    );

    let authenticationPage = null;

    if (session) {
      authenticationPage = <div className="center company-auth"><DashboardButton /></div>;
    } else if (this.state.showLogin) {
      authenticationPage = (
        <div className="center company-auth">
          {goBack}
          <Login handleLogin={this.handleLogin} />
        </div>
      );
    } else if (this.state.showSignup) {
      authenticationPage = (
        <div className="center company-auth">
          {goBack}
          <Signup handleLogin={this.handleLogin} />
        </div>
      );
    } else {
      authenticationPage = (
        <div className="center company-auth">
          <button
            type="button"
            className="btn btn-secondary"
            style={{ margin: "10px" }}
            onClick={this.displaySignup}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ margin: "10px" }}
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
