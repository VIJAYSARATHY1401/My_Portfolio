import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <header className="n1 sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark p-3 bg-primary">
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
                <a className="nav-link active" href="">
                  <span>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="">
                  <span>About</span>
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="blog"
                  smooth={true}
                  duration={500}
                  className="nav-link active "
                  href=""
                >
                  <span>Blog</span>
                </Link>
              </li>
              <li className="nav-item last">
                <a className="nav-link active btn btn-success" href="">
                  Contact
                </a>
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
