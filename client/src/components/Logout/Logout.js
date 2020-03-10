import React from "react";
import axios from "axios";
import cookie from "react-cookie";

class Logout extends React.Component {
  handleLogout = () => {
    axios
      .get("/api/logout")
      .then(response => {
        console.log(response);
        cookie.remove("connect.sid",{ path: '/' });
      });
  };

  render() {
    return (
      <div>
        <button type="button" className="btn" onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    );
  }
}

export default Logout;
