import React from "react";
import AcademicMiniProjects from "./AcademicMiniProjects";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Element } from "react-scroll";
const Dummy = () => {
  return (
    <Element name="Projects">
      <div className="Dummy bg-dark conatiner ">
        <h2 className=" p-3 text-light text-center">
          My Personal Projects and Hands-on Experience
        </h2>
        <h4 className=" p-2 lead  text-light">
          Each project is a unique piece of Development{" "}
          <i className="fa fa-pencil text-primary"></i>
        </h4>

        <div className="">
          <div className="container mb-5 ">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://img.freepik.com/free-vector/hands-holding-pencils-play-tic-tac-toe-people-drawing-crosses-noughts-simple-game-children-flat-vector-illustration-strategy-concept-banner-website-design-landing-web-page_74855-24786.jpg?size=626&ext=jpg"
                    style={{ height: "300px" }}
                    className="card-img-top img-fluid"
                    alt="Image 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Tic Tac Toe Gaming Application
                    </h5>
                    <span className="badge bg-primary">
                      Front-end Development
                    </span>
                    <p className="card-text">
                      A portale and stylish Tic-Tac-Toe Game Built using React
                      JS
                    </p>
                    <a
                      href="https://github.com/VIJAYSARATHY1401/Tic-Tac-Toe_Game/"
                      target="_blank"
                    >
                      <span className="btn btn-info b">
                        View GithHub code <i className="fab fa-github"></i>
                      </span>
                    </a>
                    <a
                      href="https://vijaysarathy1401.github.io/Tic-Tac-Toe_Game/"
                      target="_blank"
                      className="btn btn-primary d-block site2 abtn"
                    >
                      <i className="fa fa-external-link"></i> View site
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 card2">
                <div className="card">
                  <img
                    style={{ height: "400px", objectFit: "cover" }}
                    src="https://www.androidauthority.com/wp-content/uploads/2021/05/Rocket-Player-screenshot-2022.jpg"
                    className="card-img-top img-fluid"
                    alt="Image 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Music Player Web App</h5>
                    <span className="badge bg-primary">Practical DSA</span>
                    <p className="card-text">
                      A simple music photo application Built using Doubly linked
                      list
                    </p>
                    <div className="github-btn-container">
                      <a
                        href="https://github.com/VIJAYSARATHY1401/Implementing-Music_player-using-Linked_List"
                        target="_blank"
                      >
                        <span className="btn btn-info b grpGithub">
                          View GitHub code <i className="fab fa-github"></i>
                        </span>
                      </a>
                      <div className="clear-fix"></div>
                    </div>
                    <a
                      href="https://vijaysarathy1401.github.io/Implementing-Music_player-using-Linked_List/"
                      target="_blank"
                      className="btn btn-primary d-block site abtn"
                    >
                      <i className="fa fa-external-link"></i> View Site
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card a2">
                  <img
                    src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/01170800/Free-Online-Courses-with-Certificates.jpg"
                    className="card-img-top img-fluid"
                    alt="Image 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Course management</h5>
                    <span className="badge bg-primary">Backend Server</span>
                    <p className="card-text">
                      An API Implementation and Server Integration Application
                      built using Spring bootframework and Mysql Server.This
                      application involves Dependency Injection providing API
                      functionality and configuring the course information by
                      managing in Mysql server
                    </p>

                    <a
                      href="https://github.com/VIJAYSARATHY1401/Spring_boot"
                      target="_blank"
                      className="btn btn-primary  d-block mt"
                    >
                      View GitHub code <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
            <div className="card my-3">
              <div className="row no-gutters">
                <div className="col-md-4 ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTb70_uFYAkcIVLXpKggXLfU-r-lVcomc_9g&usqp=CAU"
                    alt=""
                    className="card-img h-100 p-2"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Random User API
                      <span className="badge bg-primary">
                        {" "}
                        {"  "}Task given By Iam neo.AI company
                      </span>
                    </h5>
                    <p className="card-text">
                      <span className="badge bg-success">
                        <i className="fa fa-television"></i>
                        {"    "}Web development
                      </span>
                      {"    "}
                      <span className="badge bg-info">
                        <i className="fa fa-tags"></i>
                        {"   "}REST API/Express JS
                      </span>
                    </p>
                    <p className="card-text">
                      To implement a persistent storage application using
                      Express JS. API call request of a random user or create a
                      user API and make it managable by means of CRUD operations
                      and access through the Mysql server.
                    </p>

                    <div className="clearfix"></div>
                  </div>
                  <a
                    href="https://github.com/VIJAYSARATHY1401/iamneo__project"
                    target="_blank"
                    className="btn btn-primary text-center mx-3 "
                  >
                    View GitHub code <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <AcademicMiniProjects />
        </div>
      </div>
    </Element>
  );
};

export default Dummy;
