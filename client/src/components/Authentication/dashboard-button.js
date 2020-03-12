import React from "react";
import { Link } from "react-router-dom";

function dashboardButton() {
  return (
    <Link to="/dashboard" className="btn btn-dark">
      Load Dashboard
    </Link>
  );
}

export default dashboardButton;
