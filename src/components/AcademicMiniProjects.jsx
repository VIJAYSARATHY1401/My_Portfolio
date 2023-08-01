import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMusic } from "@fortawesome/free-solid-svg-icons";
import "./AcademicMiniProjects.css";

const AcademicMiniProjects = () => {
  const [activeTab, setActiveTab] = useState(1);

  const projectData = {
    project1: [
      {
        title: "Smart Detection",
        gitlink: "https://github.com/VIJAYSARATHY1401/SmartFactory",
        link: "https://docs.google.com/document/d/1huL75e-bPFvHxklQdYeJsKseZMigswTR/edit?usp=drive_link&ouid=113301867750180904082&rtpof=true&sd=true",
        description:
          "Submitted a report on the project Smart Detection and navigation using AI and YOLO Algorithm for detecting the object location for visually impaired person",
      },
      // Add more mini project 1 cards here
    ],
    project2: [
      {
        title: "Emotion based Music Recommendation",
        gitlink:
          "https://github.com/VIJAYSARATHY1401/Music-recommendation-based-on-facial-emotion-recognition",
        link: "https://docs.google.com/document/d/1doWBf6aRX7coUSgfDhZIjXq2Qbx0gXm3/edit?usp=drive_link&ouid=113301867750180904082&rtpof=true&sd=true",
        description:
          "Submitted a report on the project Detecting and Analyzing human facial emotions/expressions using various models like FaceSDK and Recommending the songs",
      },
      // Add more mini project 2 cards here
    ],
    // Add more mini projects here
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="academic-mini-projects">
      <div className="project-buttons">
        <button
          className={`project-button ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Academic Project-1
        </button>
        <button
          className={`project-button ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Academic Project-2
        </button>
        {/* Add more buttons for other mini projects */}
      </div>
      <div className="project-cards">
        {projectData[`project${activeTab}`].map((project, index) => (
          <div
            className={`project-card ${activeTab === 1 ? "active-card" : ""}`}
            key={index}
          >
            <div className="icon-container">
              {activeTab === 1 ? (
                <FontAwesomeIcon icon={faCode} className="logo-icon" />
              ) : (
                <FontAwesomeIcon icon={faMusic} className="logo-icon" />
              )}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" className="btn btn-primary">
              <i className="fa fa-eye "></i>
              {"   "}View Report
            </a>
            <a
              href={project.gitlink}
              target="_blank"
              className="btn btn-primary"
            >
              <i className="fab fa-github"></i>
              {"    "}GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicMiniProjects;
