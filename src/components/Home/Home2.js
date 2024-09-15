import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Subrat1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import homeLogo from "../../Assets/home-main.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I am
              <i>
                <b className="purple"> Subrat Prakash</b>
              </i>{" "}
              a web developer and UI/UX designer with a passion for creating
              beautiful, functional, and user-centered digital experiences. With{" "}
              <i>
                <b className="purple"> 2 years of experience </b>
              </i>{" "}
              in the field. I am always looking for new and innovative ways to
              bring my clients visions to life.
              <br />
              <br />I believe that design is about more than just making things
              look pretty – it is about solving problems and creating intuitive,
              enjoyable experiences for users.
              <br />
              <br /> Whether I am working on a website, mobile app, or other
              digital product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
              <br />
              <br />
              "I have a deep passion for programming and problem-solving, with a
              solid foundation in{" "}
              <i>
                <b className="purple"> Java, Data Structures, and Algorithms</b>
              </i>
              . I’m particularly interested in developing innovative web
              technologies and building scalable products. My expertise lies in
              working with{" "}
              <i>
                <b className="purple"> Node.js </b>
              </i>{" "}
              as well as modern{" "}
              <i>
                <b className="purple"> JavaScript </b>
              </i>{" "}
              libraries and frameworks like{" "}
              <i>
                <b className="purple"> React.js and Next.js </b>
              </i>{" "}
              to create dynamic and efficient web applications
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homeLogo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Subrat-Prakash"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/SubratPrakash3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/subrat-prakash/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/subratprakash/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
