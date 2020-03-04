import React from "react";
import "./header.css";

/* This is a simple header that servers an anchor for the branding of the page.
 In the future this should also render a link to the dashboard if a user is
 logged in */
function Header() {
  return (
    <div className="container">
      <div className="company-name">
        <h1>CLEANR</h1>
        <h2>Residential & Commercial Cleaning</h2>
        <p>Established 2001</p>
      </div>
    </div>
  );
}

export default Header;
