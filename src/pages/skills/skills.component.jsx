import React from 'react'
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image'

import "./skills.style.css";
import {skills} from "./skills-data"
import { CardColumns } from 'react-bootstrap';

const Skills = () => {
    return (
        <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">Doge SKILLS</h1>
      <CardColumns>
            {/* Skills */}
           
            <Card className="focus mt-2 mb-2">
              <Card.Body>
              <Card.Title className="text-center  card-title">My Skills</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {
                        skills.advantages.map((skill, index) => (
                            <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                        ))
                    }
                    </Card.Text>
              </Card.Body>
              </Card>
        </CardColumns>
        </div>
    )
}

export default Skills
