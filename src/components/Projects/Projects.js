import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Docapp from "../../Assets/Projects/Docapp.png";
import Genai from "../../Assets/Projects/Genai.png";
import Portfolioo from "../../Assets/Projects/Portfolioo.png";
import FeastKartA from "../../Assets/Projects/FeastKartA.png";
import FeastKart from "../../Assets/Projects//FeastKart.png";
import Youtube from "../../Assets/Projects/Youtube.png";
import nightflex from "../../Assets/Projects/nightflex.png";
import Bookstore from "../../Assets/Projects/Bookstore.png";

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
              imgPath={FeastKart}
              isBlog={false}
              title="FeastKart"
              description="An intuitive food delivery app offering seamless food and restaurant search, cart management, and order tracking. With an integrated payment gateway for secure transactions, users can easily browse and order from their favorite restaurants. Admin features provide efficient restaurant and order management, ensuring a smooth experience for both users and restaurant owners"
              ghLink="https://github.com/Subrat-Prakash/FeastKart-client"
              demoLink="https://feastkart.vercel.app/"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title="TechTales"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink=""
              demoLink=""
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Youtube}
              isBlog={false}
              title="ViewTube"
              description="ViewTube is a dynamic YouTube clone featuring a powerful video search and filter system. Users can enjoy video content with integrated comments and live chat, all wrapped in a sleek, user-friendly interface for an enhanced viewing experience"
              ghLink="https://github.com/Subrat-Prakash/YouTube-clone"
              demoLink="https://youtube-clone-subrat.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FeastKartA}
              isBlog={false}
              title="FeastKart-Admin"
              description="The Food Delivery App Admin Panel offers powerful tools for restaurant management, including Profile Management, where admins can create and edit detailed restaurant profiles. The Food Item Management feature allows easy creation, editing, and deletion of food items, with the ability to view all items linked to the restaurant. Additionally, the Order Management feature ensures efficient handling of incoming orders for seamless operation "
              ghLink="https://github.com/Subrat-Prakash/FeastKart-admin"
              demoLink="https://feastkart-admin.vercel.app/"       
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Genai}
              isBlog={false}
              title="GenAI"
              description="The GenAI project leverages the Gemini API to deliver AI capabilities similar to GPT. This project allows users to generate high-quality text, create dynamic content, and engage in natural conversations. "
              ghLink="https://github.com/Subrat-Prakash/Generative-AI"
              demoLink="https://generative-ai-nine.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nightflex}
              isBlog={false}
              title="NightFlex"
              description="Note: Request open this Project using vpn because in this Project i used TMDB API which is banned🚫 in India currently. "
              ghLink="https://github.com/Subrat-Prakash/netflixGPT"
              demoLink="https://nightflex.netlify.app/#/"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bookstore}
              isBlog={false}
              title="Bookly"
              description="The Bookstore Application offers a seamless user experience with essential features for book lovers. Users can Browse Books, exploring a diverse selection available in the store, and easily Add to Cart their desired titles for later purchase. When ready, they can proceed to Checkout, where they can review their selected items, log in to their accounts, and place their orders effortlessly. This intuitive design ensures that users can find, select, and purchase their favorite books with minimal hassle."
              ghLink="https://github.com/Subrat-Prakash/Bookstore-Application"
              demoLink="https://mybooksreview.000webhostapp.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolioo}
              isBlog={false}
              title="Portfolio"
              description=" The portfolio website features a Multi-Page Layout that provides an organized and intuitive navigation experience. Built with Tailwind CSS and custom CSS, it offers a responsive design that looks stunning on all devices, with easy-to-customize colors for a personalized touch. The site is fully responsive, ensuring a seamless user experience, complemented by smooth animations that enhance the overall interface. Utilizing React.js, the website delivers a fluid and engaging experience, making it perfect for showcasing your work and skills"
              ghLink="https://github.com/Subrat-Prakash/Portfolio"
              demoLink="https://subrat-prakash.vercel.app/"       
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Docapp}
              isBlog={false}
              title="DocApp"
              description=" he Online Consultation App simplifies healthcare by allowing users to Book Appointments easily and Consult Online. It features detailed Profiles for both patients and doctors, ensuring personalized care and easy access to medical history, making healthcare more accessible and convenient for everyone"
              ghLink="https://github.com/Subrat-Prakash/DocApp"
              demoLink="https://docapp-latest.netlify.app"       
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
