import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './about.style.css'
import Profile from '../../assets/img/profile/Doge12.jpg'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'


const About = () => {
    return (
        <div id= 'about'>
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container>
            <Row className="pt-3 pb-5 align-items-center">
                      {/* Profile Picture */}
                    <Col xs={12} md={6}>
                    <Row className="justify-content-center mb-2 mr-2 ">
                    <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                        </Row>
                    </Col>

                    {/* About Me Description */}
                    <Col xs={12} md={6}>
                    <Row className=" align-items-start p-2 my-details rounded">
                            {/* Text */}
                            hi themre! i am <strong>&nbsp;domge.</strong>
                            <br />a pamssionate domge and a milliomnaire, bomrn and broumght up on moomn. i am a fumll stamck domge wimth flumffiness, cutemness, plamyfulness, and whomlesomeness as my semrvice 
                            stamck. 
                            <br />
                            i am curremntly pursuimng my demgree in dogemsciences wimth spemcialisation in beimng the goomdest
                            boi evemr. 
                            <br />
                            my goaml is alwamys drimven towamrds promviding amazimng expemrience wimth the bemst leveml of 
                            quamlity and semrvice to peomple. 
                            <br />
                            alomng wimth thamt, i alsom hemlp othemr domges as a coamch on theimr 
                            joumrney of becoming the goomdest boi. 
                            <br />i lomve leamrning aboumt new wamys to plamy, whamt promblems are 
                            themy solvimng and how can i use them to buimld a bettemr and happiemr womrld for the peomple thamt 
                            are livimng in it.
                            <br /><br />
                            {/* Link Buttons */}
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                            <Button className="m-2" variant="outline-primary">
                                Let's Talk
                            </Button>
                            </a>
                            </div>
                            <div>
                        <a href="https://github.com/vrarora" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-dark">
                            GitHub
                        </Button>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/vaibhav-ratnam-arora-7806a4211/" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-info">
                            LinkedIn
                        </Button>
                        </a>
                    </div>
                </Col>
            </Row>
            </Col>
        </Row>
    </Container>
    </div>
</div>
    );
    };

export default About;
