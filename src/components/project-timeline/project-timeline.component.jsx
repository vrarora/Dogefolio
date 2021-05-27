import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";

//projects
import calcy from "../../assets/img/projects/calcy.svg";
import drums from "../../assets/img/projects/drum.svg";
import etch from "../../assets/img/projects/etch.svg";
import rps from "../../assets/img/projects/rps.svg";

//skills
import HTML5 from "../../assets/img/skills/html-5.svg";
import CSS3 from "../../assets/img/skills/css3.svg";
import JS from "../../assets/img/skills/javascript.svg";

import "./project-timeline.style.css";
const ProjectTimeline = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                 {/* Project: Calculator */}
        <ImageEvent
            date="18/01/2021"
            className="text-center"
            text="Calculator App"
            src={calcy}
            alt="Calculator App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Calculator App created with HTML, CSS, and JavaScript that helps you calculate faster.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Fast at Calculations</li>
                          <li>Powered by HTML, CSS, JS</li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Card.Img
                                src={HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              />{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Card.Img
                                src={CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              />{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Card.Img
                                src={JS}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Card.Img>{" "}
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://vrarora.github.io/calculator/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/vrarora/calculator"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

           {/* Project: Etch-A-Sketch */}
        <ImageEvent
            date="29/12/2020"
            className="text-center"
            text="Etch-A-Sketch App"
            src={etch}
            alt="Etch-A-Sketch App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an Etch-A-Sketch App created with HTML, CSS, and JavaScript that helps you to unleash your inner artist.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Let go and Be in the Flow with Etch-A-Sketch</li>
                          <li>Powered by HTML, CSS, JS</li>
                          <li>Responsive and Interactive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Card.Img
                                src={HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              />{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Card.Img
                                src={CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              />{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Card.Img
                                src={JS}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Card.Img>{" "}
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://vrarora.github.io/etch-a-sketch/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/vrarora/etch-a-sketch"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

           {/* Project: Drum Kit */}
        <ImageEvent
            date="28/12/2020"
            className="text-center"
            text="Drum Kit App"
            src={drums}
            alt="Drum Kit App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Drum Kit App created with HTML, CSS, and JavaScript that helps you become expert on drums.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Loud and Bangin'</li>
                          <li>Powered by HTML, CSS, JS</li>
                          <li>Responsive and Interactive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Card.Img
                                src={HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              />{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Card.Img
                                src={CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              />{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Card.Img
                                src={JS}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Card.Img>{" "}
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://vrarora.github.io/drum-kit/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/vrarora/drum-kit"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

           {/* Project: Rock paper Scissors */}
        <ImageEvent
            date="16/12/2020"
            className="text-center"
            text="Rock, Paper, Scissors App"
            src={rps}
            alt="Rock paper Scissors App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Rock, Paper, Scissors App created with HTML, CSS, and JavaScript that helps you make major life decisions.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Random and Accurate.</li>
                          <li>Powered by HTML, CSS, JS</li>
                          <li>Interactive</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Card.Img
                                src={HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              />{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Card.Img
                                src={CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              />{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Card.Img
                                src={JS}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Card.Img>{" "}
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://vrarora.github.io/rock-paper-scissors/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/vrarora/rock-paper-scissors"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
                </Events>
            </Timeline>
        </div>
    )
}

export default ProjectTimeline
