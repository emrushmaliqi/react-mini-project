import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Cinema</h1>
      </Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </div>
  );
}

export default NavBar;
