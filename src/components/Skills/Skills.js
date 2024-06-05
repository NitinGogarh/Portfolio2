import React from 'react'

import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import { Container } from 'react-bootstrap';
const Skills = () => {
  return (
    <Container fluid className="about-section">
      <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

    </Container>
  )
}

export default Skills
