import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Awards.css"; // Import the CSS file for the new component

const Awards = () => {
  const awards = [
    {
      title: "Code-Worm Competition",
      description:
        "Won first prize in Code-Worm held at Meenakshi College of Engineering",
      icon: "fa-trophy",
    },
    {
      title: "Cognizant Digital Nurture Prodigi 2022",
      description:
        "Proposed an innovative solution Digital twin solutions for equipment monitoring and prediction failures for their predefined problem statement. Qualified for the Grand-finale and appreciated for the exemplary work in Innovation contest of Products and Resources practice",
      icon: "fa-trophy",
    },
    {
      title: "Simple Webpage design",
      description:
        "Have Done a simple static SPA webpage for my college portfolio during my 1st year. Appreciated by the management team, and Insisted me to work more on the project like this",
      icon: "fa-trophy",
    },
    {
      title: "Paper Presentation",
      description:
        "Attended Paper Presentation Conference held at R.M.K Engineering Research college and presented on the topic `Vechicle tracking system using aurdino` ",
      icon: "fa-trophy",
    },
    // Ad.
    // Add more awards here
  ];

  return (
    <div className=" awa container text-center">
      <div className="awards-section mt-4">
        <h2>Participation | Awards | Recognitions</h2>
        <div className="award-cards">
          {awards.map((award, index) => (
            <div className="award-card" key={index}>
              <div className="icon-container">
                <div className="icon">
                  <i className={`fas ${award.icon}`} aria-hidden="true"></i>
                </div>
              </div>
              <div className="content">
                <h3>{award.title}</h3>
                <p>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
