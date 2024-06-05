import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiTypescript,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{fontSize:"16px"}}>VScode</p> 
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{fontSize:"16px"}}>Postman</p> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p style={{fontSize:"16px"}}>Vercel</p> 
      </Col>
    </Row>
  );
}

export default Toolstack;
