import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.jsx";
import Particle from "../Particle";
import Apollo from "../../Assets/Projects/Apollo.png";
import Nike from "../../Assets/Projects/Nike.png";
import { SiHtml5 } from "react-icons/si";

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
              imgPath={Nike}
              isBlog={false}
              title="Nike Clone"
              description="An E-Commerce website that sells sportswear and
              accessories build with Embedded JavaScript, MongoDB, HTML and CSS."
              link="https://github.com/Shubhamfw13/NikeIndia"
              project="https://nike-in-masai-project.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Apollo}
              isBlog={false}
              title="Apollo 24/7"
              description="A digital healthcare platform that sells healthcare
              products and provides laboratory services build with JavaScript, HTML and CSS"
              link="https://github.com/Shubhamfw13/Apollo24-7"
              project="https://quirky-neumann-18c833.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
