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
                <div className="list-group-item list-group-item-action">
                  HTML5/CSS3
                </div>
                <div className="list-group-item list-group-item-action">
                  Boostrap
                </div>
                <div className="list-group-item list-group-item-action">
                  SASS-CSS preprosser
                </div>
                <div className="list-group-item list-group-item-action">
                  Javascript for web
                </div>
                <div className="list-group-item list-group-item-action">
                  JSON
                </div>
                <div className="list-group-item list-group-item-action">
                  React JS + Redux toolkit
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="list-group">
              <a className="list-group-item list-group-item-action active">
                Back End <i className="fa fa-code" aria-hidden="true"></i>
              </a>
              <div className="list-group-item list-group-item-action">
                Express JS
              </div>
              <div className="list-group-item list-group-item-action">
                REST API
              </div>
              <div className="list-group-item list-group-item-action">
                Core Java
              </div>
              <div className="list-group-item list-group-item-action">
                Spring & Spring boot
              </div>
              <div className="list-group-item list-group-item-action">
                MySql
              </div>
              <div className="list-group-item list-group-item-action">
                Python
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="list-group">
              <a className="list-group-item list-group-item-action active">
                Others <i className="fa fa-wrench" aria-hidden="true"></i>
              </a>
              <div className="list-group-item list-group-item-action">
                Docker container
              </div>
              <div className="list-group-item list-group-item-action">
                Editor: VS Code
              </div>
              <div className="list-group-item list-group-item-action">
                Editor: Eclipse
              </div>

              <div className="list-group-item list-group-item-action">
                Git & GitHub
              </div>
              <div className="list-group-item list-group-item-action">
                Code quality tester: SonarCloud
              </div>
              <div className="list-group-item list-group-item-action">
                Deployment: Netlify
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
                  <p>Team work</p>
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
                  <p>Leadership</p>
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
                  <p>Communication</p>
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
                  <p>Creativity</p>
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
