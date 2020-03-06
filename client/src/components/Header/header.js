import React from "react";
import "./header.css";

/* This is a simple header that servers an anchor for the branding of the page.
 In the future this should also render a link to the dashboard if a user is
 logged in */
function Header() {
  return (
    <div className="jumbotron jumbotron-fluid border border-dark">
      <div className="container">
        <h1 className="display-4">CLEANR</h1>
        <h2 className="lead">Residential & Commercial Cleaning</h2>
        <p>Established 2001</p>
      </div>
    </div>
  );
}

export default Header;
