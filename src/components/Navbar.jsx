import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <header className="n1 sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark p-2 bg-primary">
        <div className="row "></div>
        <div className="container">
          <a href="" className={`navbar-brand px-3`}>
            <i className="fas fa-check" style={{ color: "yellow" }}></i>{" "}
            <span>My_Portfolio Profile</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="Home" className="nav-link active" duration={500}>
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="About"
                  spy={true}
                  className="nav-link active"
                  duration={500}
                  offset={-109}
                >
                  <span>About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="Skills"
                  duration={500}
                  className="nav-link active "
                  offset={-95}
                  href=""
                >
                  <span>Skills</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="Projects"
                  duration={500}
                  className="nav-link active "
                  offset={-80}
                  href=""
                >
                  <span>Projects</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="Courses"
                  duration={500}
                  className="nav-link active "
                  offset={-100}
                  href=""
                >
                  <span>Courses and Awards</span>
                </Link>
              </li>
              <li className="nav-item last">
                <Link to="Conatct" className="nav-link active" duration={500}>
                  <span className="btn btn-success">Conatact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
        crossOrigin="anonymous"
      ></script>
    </header>
  );
};

export default Navbar;
