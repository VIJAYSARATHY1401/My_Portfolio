import React, { useState, useEffect } from "react";

const ScrollingTopBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Event handler to update scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  // Event handler to check if the device is mobile
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  // Add scroll and resize event listeners when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    checkMobile(); // Check if the device is mobile initially
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Calculate the percentage of scroll
  const scrollPercentage =
    (scrollPosition /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;

  // Apply styles based on the scrollPercentage
  const topBarStyles = {
    position: isMobile ? "fixed" : "fixed", // Use "fixed" for mobile devices
    top: isMobile ? 56 : 80, // Adjust the top position for mobile devices
    left: 0,
    borderRadius: "10px",
    width: "100%",
    height: "6px", // Set your desired height for the top bar
    backgroundColor: `rgba(0, 175, 0, 0.9)`, // Replace "rgba(255, 0, 0," with your desired color
    zIndex: 1000,
    width: `${scrollPercentage}%`, // Set the width based on the scrollPercentage
  };

  return <div style={topBarStyles}></div>;
};

export default ScrollingTopBar;
