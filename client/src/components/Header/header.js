import React from "react";
import "./header.css";
import Logout from "../Logout/Logout";
import DashboardButton from "../Authentication/dashboard-button";
import cookie from "react-cookie";


/* This is a simple header that servers an anchor for the branding of the page.
 In the future this should also render a link to the dashboard if a user is
 logged in */
class Header extends React.Component {
  
  render() {
    // getting session every time component loads so we can show null if they're not logged in
    const session = cookie.load("connect.sid");

    let buttons = null;

    if (session) {
      buttons = (
        <div>
          <DashboardButton /> <Logout />
        </div>
      );
    }
  


    return (
      <div className="jumbotron jumbotron-fluid border border-dark">
        <div className="container">
          <h1 className="display-4">CLEANR</h1>
          <h2 className="lead">Residential & Commercial Cleaning</h2>
          <p>Established 2001</p>
          {buttons}
        </div>
      </div>
    );
  }
}




export default Header;
