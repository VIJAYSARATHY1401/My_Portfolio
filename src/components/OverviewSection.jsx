// OverviewSection.js
import React, { useState } from "react";
// Make sure to create this CSS file
import "./Overview.css";
import { Element } from "react-scroll";
import "@fortawesome/fontawesome-free/css/all.min.css";

const OverviewSection = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const overviewData = [
    {
      title: "Education",
      description:
        "Iam currently pursuing BE CSE in R.M.D Enginneering College and holding 9.04 CGPA.",
      icon: "fa-graduation-cap",
    },

    {
      title: "Technical Learning Career",
      description:
        "I am a Full Stack Developer with a passion for creating dynamic and user-friendly web applications. My journey in the world of web development began with a focus on Front-end development. As I honed my skills, I started working on various Static Single Page Applications, mastering the art of crafting engaging and responsive user interfaces.Driven by the desire to build complete and robust applications, I expanded my knowledge to include Back-end development. I successfully implemented server connectivity, enabling seamless communication between the client and the server. Additionally, I gained expertise in setting up database storage systems to manage and store application data efficiently.",
      icon: "fa-book",
    },
    {
      title: "Qualities and performance",
      description: [
        "1.Creativity: ability to think outside the box and come up with innovative solutions",
        "2.Attention to Detail: Every project in my portfolio reflects my meticulous approach to design and development, ensuring a polished and professional outcome,",
        "3.Adaptability: My portfolio features diverse projects, highlighting my ability to adapt and excel in various industries and design styles",
        "4.Problem-Solving Skills: Through my portfolio, you'll see how I tackle challenges head-on, finding effective solutions to complex design and development problems.",
        "5.Collaboration: Many projects in my portfolio were completed in collaboration with teams, showcasing my strong teamwork and communication skills.",
      ],
      icon: "fa-pencil",
    },
    // Add more items as needed
  ];

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <Element name="About">
      <div className="container">
        <div className="wrap-side mt-4">
          <div className="wrap-about">
            <h2>Want to know about me?</h2>
            <span className="text-muted">Have a short glimpse!</span>
          </div>
          <div className="round-image">
            <img
              src="https://t4.ftcdn.net/jpg/01/35/92/85/360_F_135928597_xU5EzKq6vpOeXPX5vsbI48zfVVkSRlrF.jpg"
              alt="Round Image"
            />
          </div>
        </div>

        <div className="card overview-card">
          <div className="card-body">
            <div className="overview-section p-4 rounded">
              <div className="left-grid ">
                <div className="overview-buttons">
                  <h3 className="btn btn-primary">
                    Overview <i className="badge bg-success rounded-pill">3</i>
                  </h3>
                  <ul className="overview-list">
                    {overviewData.map((item, index) => (
                      <li
                        key={index}
                        className={
                          index === selectedItem
                            ? "active bg-primary text-white"
                            : ""
                        }
                        onClick={() => handleItemClick(index)}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="right-grid">
                <h3 className="btn btn-primary desc1 ">
                  Description <i className="fa fa-address-book"></i>
                </h3>
                <div className="overview-description p-4 rounded">
                  {selectedItem !== null && (
                    <ul>
                      {Array.isArray(overviewData[selectedItem].description) ? (
                        overviewData[selectedItem].description.map(
                          (point, index) => (
                            <li key={index} style={{ fontFamily: "cursive" }}>
                              {point}
                            </li>
                          )
                        )
                      ) : (
                        <li style={{ fontFamily: "cursive" }}>
                          {overviewData[selectedItem].description}
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default OverviewSection;
