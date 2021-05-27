import React from 'react'
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Tilt from 'react-tilt'
import Card from "react-bootstrap/Card";
import Doge from "../../assets/img/experience/Cheems.svg";

import './experience.style.css';

const Experience = () => {
    return (
        <div id='experience'>
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={Doge} alt="Doge logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <Card.Title className="text-center">The Goodest Boi</Card.Title>
                                </div>
                                <div>
                                    <Card.Text className="text-center style">
                                        <strong>Skills:</strong> Cuddling, Playing, Eating, Sleeping, Loving
                    <br />
                                        <strong> Description </strong>
                                        <ul className="text-left">
                                            <li><strong>Developed &amp; enhanced</strong> Lives of many, with love.</li>
                                            <li><strong>Provided</strong> Love, care, support to many.
                      </li>
                                            <li><strong>1st Prize</strong> on the International Doge Conference</li>
                                        </ul>

                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Experience
