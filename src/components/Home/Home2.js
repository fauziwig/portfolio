import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about-img.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
              I am currently studying Informatics Engineering 
              <br/>
              <br />I am familiar with
              <i>
                <b className="purple"> C++, PHP, and Javascript. </b>
              </i>
              <br />
              <br />
              I also have an interest in building &nbsp;
              <i>
                <b className="purple">Website Products </b> and
                using 
                <b className="purple">
                &nbsp; Wordpress.
                </b>
              </i>
              <br />
              <br />
              Recently, I have been dedicating of time to learning the MERN stack for developing products
              such as <b className="purple">Node.js</b>,<b className="purple">React.js</b>,<b className="purple">Express.js</b> and <b className="purple">MongoDB</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          {/* <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="footer-icons">
            <li className="social-icons">    
              <a
                href="https://github.com/fauziwig"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/iniwiguna"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/fauzi-triagung-wiguna/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/fauzitriagungw"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
