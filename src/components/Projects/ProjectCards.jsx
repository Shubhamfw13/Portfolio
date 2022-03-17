import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal} from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { SiHtml5 } from "react-icons/si";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <br />
        <Button variant="primary" href={props.project} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
        <hr />
        <Button variant="primary" href={props.link} target="_blank">
          <AiFillGithub/> &nbsp;
          {props.isBlog ? "View Blog" : "View Repository"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
