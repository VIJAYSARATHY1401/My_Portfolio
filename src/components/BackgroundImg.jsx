import React from "react";
import Navbar from "./Navbar";
import TopContainer from "./TopContainer";
import { useState, useEffect } from "react";
const BackgroundImg = ({ isSticky }) => {
  return (
    <div className="bg-img">
      <Navbar isSticky={{ isSticky }} />
      <TopContainer isSticky={{ isSticky }} />
    </div>
  );
};

export default BackgroundImg;
