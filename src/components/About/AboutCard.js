import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Fauzi Triagung Wiguna </span>
            from <span className="purple"> Yogyakarta, Indonesia.</span>
            <br />
            I am currently studying on Informatics Engineering at Ahmad Dahlan University.
            <br />
              I am currently a <span className="purple">freelance WordPress Developer</span>   
            <br />
            <br />
            Apart from coding, I love to do some activities such as 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing 
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
          </ul>

          <br />
          <p style={{ color: "#6495ED" }}>
            "I am not in competition wiht anyone but myself. 
            My goal is to <span className="purple"> improve myself </span> continuously"{" "}
          </p>
          <footer className="blockquote-footer">Bill Gates</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
