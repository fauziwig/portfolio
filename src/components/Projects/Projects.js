import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wedding from "../../Assets/Projects/wedding.png";
import portal from "../../Assets/Projects/portal.png";
import meeting from "../../Assets/Projects/meeting.png";
import adminify from "../../Assets/Projects/adminify.png";

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
              imgPath={portal}
              isBlog={false}
              title="UI Mobile Design of Portal Akademik UAD Mobile"
              description="This project involves creating a user-friendly and visually appealing mobile interface for UAD's academic portal, enhancing accessibility and efficiency for students and staff on the go."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adminify}
              isBlog={false}
              title="Hepimeal Wonosobo Employee Salary Calculation System - Adminify"
              description="The Hepimeal Wonosobo Employee Salary Calculation System is a web-based platform that assists in calculating employee salaries for the Hepimeal Wonosobo SME business. The system streamlines the process, making salary calculations easier, faster, and more organized."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meeting}
              isBlog={false}
              title="UI Mobile Design of Meeting Scheduling Application"
              description="Designed an intuitive mobile interface for a meeting scheduling app, focusing on ease of use and efficient meeting management, enabling users to schedule and manage meetings seamlessly."
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wedding}
              isBlog={false}
              title="Wedding Invitation Website"
              description="An elegant and personalized wedding invitation website, featuring romantic visuals and an easy-to-navigate design. This site beautifully captures the essence of the couple's journey"
              ghLink=""
              demoLink="https://brideinvite.com/alfina-hanif-wedding/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
