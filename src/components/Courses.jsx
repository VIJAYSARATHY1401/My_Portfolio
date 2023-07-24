import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// Create a CSS file for custom styling
import { Element } from "react-scroll";
const Courses = () => {
  const courses = [
    {
      title: "React JS Training",
      provider: "Offered by Internshala",
      details:
        "Gained a Fundamental Knowledge in React JS and Experience via having practical Programming",
      icon: "fa-laptop-code",
    },
    {
      title: "Programming in Java",
      provider: "Offered by NPTEL",
      details:
        "Understanding core Java concepts and dealing with programming, cleared NPTEL exam with 72%.",
      icon: "fa-paint-brush",
    },
    {
      title: "REST API with Spring Boot",
      provider: "Offered by Udemy",
      details:
        "Developed RESTful APIs using Spring Boot and Spring Data JPA, and MySQL database integration.",
      icon: "fa-code",
    },
    {
      title: "Skillrack 10+ crash course",
      provider: "Offered by Skillrack",
      details:
        "A web learning portal for learning and developing coding/techical skills",
      icon: "fa-school",
    },
    {
      title: "MasterClass on Java Mulithreading",
      provider: "Offered by Scaler",
      details:
        "Participated in a masterclass program on Java Concurrency and Multi-threading.",
      icon: "fa-certificate",
    },
    {
      title: "CSC HDCP Course",
      provider: "CSC",
      details:
        "Explored the world of programming tools,Scripting and platforms ",
      icon: "fa-graduation-cap",
    },
    // Add more courses here
  ];

  return (
    <Element name="Courses">
      <div className="container">
        <div className="courses-section mt-4">
          <h2 className="text-center mb-4">Courses & Certificates</h2>
          <div className="row">
            {/* First Row */}
            {courses.slice(0, 3).map((course, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="course-card bg-primary text-white p-4 mb-4"
                  data-tooltip={course.provider}
                >
                  {/* ... Content of the course card ... */}
                  <div className="icon-container">
                    <div className="icon">
                      <i
                        className={`fas ${course.icon}`}
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  <div className="content">
                    <h3>{course.title}</h3>
                    <p className="provider">
                      <i
                        className={`fab fa-${course.provider.toLowerCase()}`}
                        aria-hidden="true"
                      ></i>
                    </p>
                    <p>{course.details}</p>
                    <a
                      href="#"
                      className="btn btn-warning d-block btn"
                      style={{ width: "280px" }}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {/* Second Row */}
            {courses.slice(3, 6).map((course, index) => (
              <div
                className={`col-md-4 ${
                  course.title === "Skillrack 10+ crash course" ||
                  course.title === "MasterClass on Java Mulithreading"
                    ? "hide-mobile"
                    : ""
                }`}
                key={index}
              >
                <div
                  className="course-card bg-primary text-white p-4 mb-4"
                  data-tooltip={course.provider}
                >
                  {/* ... Content of the course card ... */}
                  <div className="icon-container">
                    <div className="icon">
                      <i
                        className={`fas ${course.icon}`}
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  <div className="content">
                    <h3>{course.title}</h3>
                    <p className="provider">
                      <i
                        className={`fab fa-${course.provider.toLowerCase()}`}
                        aria-hidden="true"
                      ></i>
                    </p>
                    <p>{course.details}</p>
                    <a
                      href="#"
                      className="btn btn-warning d-block btn"
                      style={{ width: "280px" }}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Courses;
