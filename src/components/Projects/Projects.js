import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import coursify from "../../Assets/Projects/coursify.png";
import codeConnect from "../../Assets/Projects/codeConnect.png";
import FileShared from "../../Assets/Projects/FileShared.png";
import gogarhMovies from "../../Assets/Projects/gogarhMovies.png";
import videoCall from "../../Assets/Projects/videoCall.png";
import Netflix from "../../Assets/Projects/Netflix.png";
import Appetite from "../../Assets/Projects/appetite.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeConnect}
              isBlog={false}
              title="connectNcode"
              description=" ConnectNcode is a real-time collaboration platform built with React, Node.js, MUI, Typescript and Socket.io, allowing users to code together and chat simultaneously. This intuitive application fosters seamless live interaction and coding collaboration among users."
              ghLink="https://github.com/NitinGogarh/connectNcodeShare"
              demoLink="https://connectncodeshare-production-cf10.up.railway.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoCall}
              isBlog={false}
              title="video Calling Application"
              description=" Developed a web-based video calling application using WebRTC Technology.Enabled seamless peer-to-peer video communication between two users using Socket.io for real-time communication"
              ghLink="https://github.com/NitinGogarh/video-calling-web-app"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coursify}
              isBlog={false}
              title="Coursify"
              description="Coursify is a fully authenticated MERN stack application where learners can enroll in courses, track their progress, and monitor their learning journey in real-time. It provides a secure and engaging platform for users to enhance their skills and knowledge."
              ghLink="https://github.com/NitinGogarh/CoursifyByNitin"
              demoLink="https://coursifybynitin-production.up.railway.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Clone"
              description="Created a Netflix clone with Firebase authentication, providing users secure access to a vast library of
              thousands of movies using OMDB API.
            
              Integrated MongoDB to enable users to personalize their experience by adding favorite movies to custom lists,
              enhancing content curation and revisitability"
              ghLink="https://github.com/NitinGogarh/Netflix-clone"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FileShared}
              isBlog={false}
              title="FileShared"
              description="FileShared is a MERN stack web application with a sleek MUI design that enables users to effortlessly upload files and share them instantly via a generated URL or barcode. This seamless, one-step process simplifies file sharing, making it quick and user-friendly."
             ghLink="https://github.com/NitinGogarh/FileShared"
             
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gogarhMovies}
              isBlog={false}
              title="GogarhMovies"
              description="Immerse yourself in the world of music with our online player, meticulously crafted using JavaScript. Navigate through a user-friendly interface, create playlists, and discover new tracks effortlessly. Elevate your music experience with smooth playback and personalized features."
              ghLink="https://github.com/NitinGogarh/GogarhMovies"
             
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Appetite}
              isBlog={false}
              title="Appetite suppersant"
              description="Developed a dynamic restaurant web app with Node.js, Express, and Leaflet API, enabling users to search and
              discover nearby dining options worldwide.
              Implemented an interactive map view to explore nearby Restaurants and search for restaurants in any place
              globally"
              ghLink="https://github.com/NitinGogarh/AppetiteSuppersant"
              
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
