import React from "react";
import "./Footer.css";
import image2 from "../photo.jpeg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-left">
          <h1>
            Front-end Development{" "}
            <i className="fa fa-laptop" style={{ fontSize: "30px" }}></i>
          </h1>
          <blockquote>
            Learn free Gain more! <span style={{ color: "red" }}>❤</span>
          </blockquote>
          <div>
            <h3 style={{ marginTop: "8px", textDecoration: "underline" }}>
              Follow me on
            </h3>
            <div className="idiv" style={{ marginBottom: "20px" }}>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-github"></i>
            </div>
            <span style={{ color: "gray", marginLeft: "-10px" }}>
              &copy; All rights reserved{" "}
            </span>
            <div className="mt-2">
              <span style={{ color: "gray" }}>
                <i className="fas fa-info-circle"></i> This Web portfolio was
                completely designed using React JS and Bootstrap CSS
              </span>
            </div>
          </div>
        </div>
        <div className="custom-content">
          {/* Add your cool content or design elements here */}
          <h3>Contact Info</h3>
          <p>Email: vijayinnovation14@gmail.com</p>
          <p>Phone: 6380760038</p>
          <p>City: Chennai TamilNadu</p>
        </div>

        <div className="img-div">
          <div className="img-card">
            <img src={image2} alt="" />
            <div className="overlay">
              <div className="overlay-content">
                <h3>VIJAYSARATHY M</h3>
                <p>Front-end Developer</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
