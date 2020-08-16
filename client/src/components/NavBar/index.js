import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
    <a className="navbar-item" href="https://books.google.com/" id="navBarText1">
    Google Books
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

    <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <Link
      to="/search"
      className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
      className="navbar-item"
      id="navBarText2">
        Search
      </Link>

      <Link 
      to="/saved"
      className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
      className="navbar-item"
      id="navBarText3">
      Saved
      </Link>
    </div>
    </div>
    </nav>

  );
}

export default NavBar;