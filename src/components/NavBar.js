import React from "react";

function NavBar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg p-md-3">
      <div className="container">
        <a href="" className="navbar-brand">
        <img
                src={require("../assets/img/mini-logo.png")}
                alt=""
                width="100"
                className="d-block mx-auto"
              />
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-target="#navbarNav"
          data-bs-toggle="collapse"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle Navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#home" className="nav-link text-info">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link text-info">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link text-info">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#education" className="nav-link text-info">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link text-info">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
