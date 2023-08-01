import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Element } from "react-scroll";
const Listgroup = () => {
  return (
    <Element name="Skills">
      <div className="container lGroup">
        <h2 className="mt-3 text-center ct">Core Technical Skills</h2>
        <div className="row text-center ">
          <div className="col-4 ">
            <div>
              <div className="list-group ">
                <a className="list-group-item list-group-item-action active">
                  Front End <i className="fab fa-html5 " aria-hidden="true"></i>
                </a>
                <div
                  className="list-group-item list-group-item-action"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  HTML5/CSS3{" "}
                  <i
                    className="fab fa-css3 mx-2"
                    style={{ color: "#1572B6", fontSize: "25px" }}
                    aria-hidden="true"
                  ></i>
                </div>
                <div
                  className="list-group-item list-group-item-action"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Bootstrap{" "}
                  <i
                    className="fab fa-bootstrap mx-2"
                    style={{ color: "#563D7C", fontSize: "30px" }}
                    aria-hidden="true"
                  ></i>
                </div>
                <div
                  className="list-group-item list-group-item-action"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  SASS-CSS preprocessor{" "}
                  <i
                    className="fab fa-sass mx-2"
                    style={{ color: "#CC6699", fontSize: "30px" }}
                    aria-hidden="true"
                  ></i>
                </div>
                <div
                  className="list-group-item list-group-item-action"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Javascript for web{" "}
                  <i
                    className="fab fa-js mx-2"
                    style={{ color: "#F7DF1E", fontSize: "30px" }}
                    aria-hidden="true"
                  ></i>
                </div>
                <div
                  className="list-group-item list-group-item-action"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Redux toolkit{" "}
                  <img
                    src="data:image/png;base64,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"
                    alt="Redux Toolkit Logo"
                    height="30px"
                    style={{ marginLeft: "10px" }}
                  />
                </div>
                <div
                  className="list-group-item list-group-item-action"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  React_JS 18{" "}
                  <i
                    className="fab fa-react mx-2"
                    style={{ color: "#61DAFB", fontSize: "30px" }}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="list-group">
              <a className="list-group-item list-group-item-action active">
                Back End <i className="fa fa-code" aria-hidden="true"></i>
              </a>
              <div
                className="list-group-item list-group-item-action"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="fab fa-node-js"
                  style={{
                    color: "#339933",
                    fontSize: "30px",
                    marginRight: "10px",
                  }}
                ></i>{" "}
                Express JS
              </div>
              <div
                className="list-group-item list-group-item-action"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="fas fa-network-wired"
                  style={{
                    color: "#E34F26",
                    fontSize: "25px",
                    marginRight: "10px",
                  }}
                ></i>{" "}
                REST API
              </div>
              <div
                className="list-group-item list-group-item-action"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="fab fa-java"
                  style={{
                    color: "#007396",
                    fontSize: "30px",
                    marginRight: "10px",
                  }}
                ></i>{" "}
                Core Java
              </div>
              <div
                className="list-group-item list-group-item-action"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="data:image/png;base64,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"
                  alt="Redux Toolkit Logo"
                  height="30px"
                  style={{ marginLeft: "10px" }}
                />
                Spring & Spring boot
              </div>
              <div
                className="list-group-item list-group-item-action"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="fas fa-database"
                  style={{
                    color: "#4479A1",
                    fontSize: "25px",
                    marginRight: "10px",
                  }}
                ></i>{" "}
                MySql
              </div>
              <div
                className="list-group-item list-group-item-action"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="fab fa-python"
                  style={{
                    color: "#3776AB",
                    fontSize: "25px",
                    marginRight: "10px",
                  }}
                ></i>{" "}
                Python
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="list-group">
              <a className="list-group-item list-group-item-action active">
                Others <i className="fa fa-wrench" aria-hidden="true"></i>
              </a>
              <div
                className="list-group-item list-group-item-action"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Docker container{" "}
                <i
                  className="fab fa-docker mx-2"
                  style={{ color: "#2496ED", fontSize: "25px" }}
                  aria-hidden="true"
                ></i>
              </div>
              <div
                className="list-group-item list-group-item-action"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Editor: VS Code{" "}
                <i
                  className="fas fa-code mx-2"
                  style={{ color: "#007ACC", fontSize: "25px" }}
                  aria-hidden="true"
                ></i>
              </div>
              <div
                className="list-group-item list-group-item-action"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Editor: Eclipse{" "}
                <i
                  className="fas fa-moon mx-2"
                  style={{ color: "#3C64A9", fontSize: "25px" }}
                  aria-hidden="true"
                ></i>
              </div>
              <div
                className="list-group-item list-group-item-action"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Git & GitHub{" "}
                <i
                  className="fab fa-github mx-2"
                  style={{ color: "#181717", fontSize: "25px" }}
                  aria-hidden="true"
                ></i>
              </div>
              <div
                className="list-group-item list-group-item-action"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Code quality tester: SonarCloud{" "}
                <i
                  className="fas fa-search mx-2"
                  style={{ color: "#1C6EDE", fontSize: "25px" }}
                  aria-hidden="true"
                ></i>
              </div>
              <div
                className="list-group-item list-group-item-action"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Deployment: Netlify{" "}
                <i
                  className="fas fa-globe mx-2"
                  style={{ color: "#00C7B7", fontSize: "25px" }}
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-view">
          <div className="skill-main mt-4">
            <div className="skill-left">
              <h3>Proficiency of top techStacks</h3>
              <div className="skill-bar">
                <div className="info">
                  <p>HTML5/CSS3</p>
                  <p>80%</p>
                </div>
                <div className="bar">
                  <span className="html"></span>
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>React JS</p>
                  <p>70%</p>
                </div>
                <div className="bar">
                  <span className="react"></span>
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>Spring</p>
                  <p>40%</p>
                </div>
                <div className="bar">
                  <span className="spring"></span>
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>Rest API</p>
                  <p>60%</p>
                </div>
                <div className="bar">
                  <span className="Api"></span>
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>Mysql</p>
                  <p>75%</p>
                </div>
                <div className="bar">
                  <span className="sql"></span>
                </div>
              </div>
            </div>
            <div className="skill-right">
              <h3 className="">Professional Skills</h3>
              <div className="grid-container ">
                <div className="loader-wrapper">
                  <p>
                    <i className="fas fa-users mx-1" aria-hidden="true"></i>{" "}
                    Team work
                  </p>
                  <div className="loader-container">
                    <div
                      className="loader"
                      style={{
                        transform: "rotate(50deg)",
                        clip: "rect(0, 75px, 100px, 0)",
                      }}
                    ></div>
                    <div className="percentage-label">70%</div>
                  </div>
                </div>
                <div className="loader-wrapper">
                  <p>
                    <i className="fas fa-user-tie mx-1" aria-hidden="true"></i>{" "}
                    Leadership
                  </p>
                  <div className="loader-container">
                    <div
                      className="loader"
                      style={{
                        transform: "rotate(50deg)",
                        clip: "rect(0, 60px, 100px, 0)",
                      }}
                    ></div>
                    <div className="percentage-label">60%</div>
                  </div>
                </div>
                <div className="loader-wrapper">
                  <p>
                    <i className="fas fa-comments mx-1" aria-hidden="true"></i>
                    Communication
                  </p>
                  <div className="loader-container">
                    <div
                      className="loader"
                      style={{
                        transform: "rotate(50deg)",
                        clip: "rect(0, 75px, 100px, 0)",
                      }}
                    ></div>
                    <div className="percentage-label">75%</div>
                  </div>
                </div>
                <div className="loader-wrapper">
                  <p>
                    <i className="fas fa-lightbulb mx-1" aria-hidden="true"></i>{" "}
                    Creativity
                  </p>
                  <div className="loader-container">
                    <div
                      className="loader"
                      style={{
                        transform: "rotate(50deg)",
                        clip: "rect(0, 85px, 100px, 0)",
                      }}
                    ></div>
                    <div className="percentage-label">85%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Listgroup;
