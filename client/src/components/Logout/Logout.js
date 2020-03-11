import React from "react";
import axios from "axios";
import cookie from "react-cookie";

class Logout extends React.Component {
  handleLogout = () => {
    axios.get("/api/logout").then(response => {
      cookie.remove("connect.sid", { path: "/" });
      window.location.reload(false);
    });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-dark mt-2"
          onClick={this.handleLogout}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default Logout;
