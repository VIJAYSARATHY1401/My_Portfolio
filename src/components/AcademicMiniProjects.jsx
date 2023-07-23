import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMusic } from "@fortawesome/free-solid-svg-icons";
import "./AcademicMiniProjects.css";

const AcademicMiniProjects = () => {
  const [activeTab, setActiveTab] = useState(1);

  const projectData = {
    project1: [
      {
        title: "Sem5 Mini Project - Smart Detection",
        description:
          "Submitted a report on the project `Smart Detection and navigation using AI and YOLO Algorithm for detecting the object location for visually impaired person`",
      },
      // Add more mini project 1 cards here
    ],
    project2: [
      {
        title: "Sem6 Mini Project - Emotion based Music Recommendation",
        description:
          "Submitted a report on the project `Detecting and Analyzing human facial emotions/expressions using various models like FaceSDK and Recommending the songs`",
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
          Mini Project 1
        </button>
        <button
          className={`project-button ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Mini Project 2
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
            <button className="btn btn-primary">View More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicMiniProjects;
