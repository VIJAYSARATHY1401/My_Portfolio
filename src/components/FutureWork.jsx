import React from "react";
import "./FutureWork.css"; // Import the CSS file for the new component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const FutureWork = () => {
  return (
    <div className="container fut">
      <div className="future-work-section">
        <h2 className="future-work-title">Future Work and Learnings</h2>
        <div className="future-work-content">
          <p>
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            In the future, I plan to expand my skills in full-stack web
            development, including front-end technologies like React.js and
            Vue.js, and back-end technologies like Node.js and Express.js.
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />I am also
            interested in exploring cloud computing platforms such as AWS and
            Azure to deploy and manage scalable applications.
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            Additionally, I aim to work on real-world projects that contribute
            to solving meaningful problems and provide value to users. I believe
            that hands-on experience is the best way to learn and grow as a
            developer.
          </p>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            Continuous learning and staying up-to-date with the latest
            technologies are essential aspects of my journey in the field of web
            development. I am excited about the possibilities and challenges
            that lie ahead, and I am committed to becoming a proficient and
            well-rounded developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureWork;
