// TopContainer.js
import React from "react";
import { Element } from "react-scroll";
import image from "./Screenshot_20221221-134901_WhatsApp[540].jpg";

const TopContainer = () => {
  const resumeFileUrl =
    "https://drive.google.com/file/d/1FKWg-wQXhxsaWCaKGMW3qU-cCvdZiYxw/view?usp=drive_link";

  return (
    <Element name="about" className="bg-img">
      <div className="imgg-container">
        <img src={image} alt="Description of the image" className="top-image" />
        <div className="desktop-only">
          <div className="wrap-container">
            <h1 className="text-light">Mr.VIJAYSARATHY M</h1>
            <h3 className="text-light">
              <span className="badge bg-success">
                <i className="fa fa-user"></i> {"  "}Upcoming
              </span>{" "}
              full Stack developer
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
              <button className="btn btn-outline-info">
                {" "}
                <i className="fa fa-laptop"></i>
                {"     "}My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default TopContainer;
