// InternshipExperience.js
import React from "react";
import "./InternshipExperience.css"; // Import the CSS file for styling

const InternshipExperience = () => {
  return (
    <div className="container int">
      <div className="experience-container">
        <h2 className="experience-title">
          <i className="fas fa-briefcase"></i> Frontend Development Internship
        </h2>
        <h4 className="lead badge bg-success">Free Training Internship</h4>
        <p className="experience-company">Senchola IT Solution Company</p>
        <p className="experience-duration">July 2023 - Present</p>
        <ul className="experience-highlights">
          <li>
            <i className="fas fa-check-circle"></i> Working on the training
            tasks on practical projects under the guidance of experienced
            developers.
          </li>
          <li>
            <i className="fas fa-check-circle"></i> Collaborated with the team
            to design and implement responsive and user-friendly web interfaces.
          </li>
          <li>
            <i className="fas fa-check-circle"></i> Gained hands-on experience
            in modern Frontend technologies like React, HTML, CSS, and
            JavaScript.
          </li>
          <li>
            <i className="fas fa-check-circle"></i> Developed a deep
            understanding of version control systems like Git.
          </li>
          <li>
            <i className="fas fa-check-circle"></i> Participated in code reviews
            and provided valuable feedback.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InternshipExperience;
