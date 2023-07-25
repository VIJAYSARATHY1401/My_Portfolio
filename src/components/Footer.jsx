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
            Full Stack Development{" "}
            <i className="fa fa-laptop" style={{ fontSize: "30px" }}></i>
          </h1>
          <blockquote>
            Learn free Gain more! <span style={{ color: "red" }}>❤</span>
          </blockquote>
          <div>
            <h3
              style={{
                marginTop: "8px",
                marginRight: "8px",
                textDecoration: "underline",
              }}
            >
              Follow me on
            </h3>
            <div className="idiv" style={{ marginBottom: "20px" }}>
              <a
                href="https://www.facebook.com/david.vijay.5817"
                target="_blank"
                style={{ color: "blue" }}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="   https://www.linkedin.com/in/vijaysarathy-m-52a37b244/"
                style={{ color: "rgb(24, 121, 248)" }}
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/committed_to_my_personality/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
                style={{ color: "red" }}
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://github.com/VIJAYSARATHY1401"
                target="_blank"
                style={{ color: "black" }}
              >
                <i className="fab fa-github" style={{ cursor: "pointer" }}></i>
              </a>
            </div>
            <span style={{ color: "gray", marginLeft: "-10px" }}>
              &copy; All rights reserved 2023{" "}
            </span>
            <div className="mt-2">
              <span style={{ color: "gray" }}>
                <i className="fas fa-info-circle"></i> This Web portfolio was
                completely designed using React JS and Bootstrap CSS
              </span>
            </div>
          </div>
        </div>

        <div className="img-div">
          <div className="img-card">
            <img src={image2} alt="" />
            <div className="overlay">
              <div className="overlay-content">
                <h3>VIJAYSARATHY M</h3>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
