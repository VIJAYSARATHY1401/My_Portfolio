import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import image from "./Screenshot_20221221-134901_WhatsApp[540].jpg";
import { Link } from "react-scroll";
const TopContainer = () => {
  const resumeFileUrl =
    "https://drive.google.com/file/d/1FKWg-wQXhxsaWCaKGMW3qU-cCvdZiYxw/view?usp=drive_link";

  return (
    <Element name="Home">
      <div className="imgg-container">
        <img src={image} alt="Description of the image" className="top-image" />
        <div className="desktop-only">
          <div className="wrap-container">
            <h1 className={`text-light`} style={{ fontFamily: "Lugrasimo" }}>
              Mr.VIJAYSARATHY M
            </h1>
            <h3 className="text-light">
              <span className="badge bg-success">
                <i className="fa fa-user"></i> {"  "}Upcoming
              </span>{" "}
              Full Stack Developer
            </h3>
            <div className="wrap-btn">
              <a
                href={resumeFileUrl}
                download="Mr.VIJAYSARATHY_M_Resume.pdf"
                className="mx-3"
                target="_blank"
              >
                <button className="btn btn-primary">
                  <i className="fas fa-download"></i> {"   "}View and Download
                  Resume
                </button>
              </a>
              <Link
                to="Contact"
                className="btn btn-outline-info"
                offset={-60}
                duration={500}
              >
                {" "}
                <i className="fa fa-laptop"></i>
                {"     "}Hire Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default TopContainer;
