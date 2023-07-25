import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Awards.css"; // Import the CSS file for the new component

const Awards = () => {
  const awards = [
    {
      title: "Code-Worm Symposium Competition",
      description:
        "Won first prize in Code-Worm coding competition held as a part of National Level Symposium at Meenakshi College of Engineering",
      icon: "fa-trophy",
      Certificate:
        "https://drive.google.com/file/d/15xMq1rnrFCw2ZbIIb2-1EuHk-dBkNZuk/view?usp=sharing",
    },
    {
      title: "Cognizant Digital Nurture Prodigi 2022",
      description:
        "Proposed an innovative solution Digital twin solutions for equipment monitoring and prediction failures for their predefined problem statement. ",
      icon: "fa-trophy",
      Certificate:
        "https://drive.google.com/file/d/1C_VDSXO5eKYI3zzZd8qmoDeY3RVPiVfo/view?usp=drive_link",
    },
    {
      title: "Simple Webpage design",
      description:
        "Have Done a simple static SPA webpage for my college portfolio during my 1st year. Appreciated by the management team and encouraged me to work more on the project",
      icon: "fa-trophy",
      Certificate: "https://vijaysarathy1401.github.io/UIRMD/",
    },
    {
      title: "Paper Presentation",
      description:
        "Attended Paper Presentation Conference held at R.M.K Engineering Research college and presented on the topic `Vechicle tracking system using aurdino` ",
      icon: "fa-trophy",
      Certificate:
        "https://drive.google.com/file/d/1mfkClIaU7LvrX2aMFJvokd34UW7lLPSK/view?usp=sharing",
    },
    // Ad.
    // Add more awards here
  ];

  return (
    <div className="awa container text-center">
      <div className="awards-section mt-4">
        <h2 style={{ fontSize: "32px", letterSpacing: "1px" }}>
          Participation | Awards
        </h2>
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
                <div className="link-container">
                  <a
                    href={award.Certificate}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <i className="fa fa-external-link"></i> View More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
