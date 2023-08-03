import React, { useState } from "react";
import "./FloatingIcons.css";
import { Link } from "react-scroll";
const FloatingIcons = () => {
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  const handleCall = () => {
    // Implement your logic to initiate the call here
    window.location.href = "tel:6380760038"; // Replace with the phone number or the call initiation logic
  };
  const handleMail = () => {
    // Implement your logic to open the email client with your email address pre-filled
    window.location.href = "mailto:vijayinnovation14@gmail.com"; // Replace with your email address
  };
  return (
    <div className="floating-icons">
      <div
        className={`plus-button ${showIcons ? "active" : ""}`}
        onClick={toggleIcons}
      >
        <i className={`fas ${showIcons ? "fa-times" : "fa-plus"} `}></i>
      </div>
      <div className={`icon-stack ${showIcons ? "visible" : ""}`}>
        {/* Add your icons here, for example: */}
        <i className="fas fa-phone" onClick={handleCall}></i>
        <i className="fas fa-envelope" onClick={handleMail}></i>
        <Link to="Contact" offset={-60} duration={500}>
          {" "}
          <i className="fas fa-comments"></i>
        </Link>
        {/* Add more icons as needed */}
      </div>
    </div>
  );
};

export default FloatingIcons;
