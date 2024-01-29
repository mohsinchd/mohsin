import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import house from "../../Assets/Projects/house.png";
import github from "../../Assets/Projects/github.png";
import proshop from "../../Assets/Projects/screens.png";
import learnica from "../../Assets/Projects/learnica.png";
import orange from "../../Assets/Projects/orange.png";
import water from "../../Assets/Projects/water.png";

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
              imgPath={learnica}
              isBlog={false}
              title="Learnica"
              description="Learnica, a robust MERN stack application, empowers users to explore, buy, and sell courses seamlessly. With an intuitive interface, it offers a rich learning experience, connecting learners with diverse educational content. Dive into a world of knowledge as you navigate through courses, create engaging content, and contribute to a thriving learning community. Elevate your learning journey with Learnica – where education meets innovation."
              ghLink="https://github.com/mohsinchd/Learnica-Frontend"
              demoLink="https://learnica.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orange}
              isBlog={false}
              title="Orange Storage"
              description="Orange Storage, a dynamic full-stack application, revolutionizes the way we manage storage solutions. With a sleek React frontend and Django backend, Orange Storage facilitates seamless reservations for storage rooms. Storage providers effortlessly list their spaces, while users reserve with confidence. The platform features interactive charts, maps, and a user-friendly interface, creating a streamlined experience for both providers and users. Simplify storage solutions with Orange Storage – where convenience meets innovation."
              ghLink="https://github.com/mohsinchd/Orange-Storage"
              demoLink="https://orange-storage-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proshop}
              isBlog={false}
              title="ProShop"
              description="ProShop, your ultimate e-commerce destination, combines cutting-edge technology with seamless user experience. This feature-rich platform, complete with PayPal integration, ensures secure and efficient transactions. Shoppers can explore a diverse range of products, make hassle-free payments, and enjoy a smooth checkout process. For administrators, ProShop offers a powerful dashboard to manage inventory, track orders, and optimize the online shopping experience. Elevate your online retail game with ProShop – where shopping meets sophistication"
              ghLink="https://github.com/mohsinchd/MERN-Ecommerce-Shop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              isBlog={false}
              title="House Market Place"
              description="Welcome to House Marketplace, a comprehensive platform where users seamlessly buy, sell, and rent out properties. With an intuitive interface, users can upload property details, showcase captivating images, and effortlessly choose between selling or renting. The location-based mapping feature enhances the user experience, allowing prospective buyers or renters to visualize property locations dynamically. Join our thriving community and embark on a journey where every house finds its perfect match. House Marketplace – where homes meet opportunity."
              ghLink="https://github.com/mohsinchd/House-Market-Place-MERN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={water}
              isBlog={false}
              title="Water Service Providers"
              description="Dive into the world of refreshing convenience with Water Service Providers. This unique platform offers a variety of water services, from dispensers to filtration plants, connecting users with quality hydration solutions. With a seamless Google authentication process, users can explore, purchase, and enjoy water services effortlessly. The admin dashboard ensures smooth operations, allowing providers to manage inventory, track orders, and maintain a thriving water service community. Quench your thirst for innovation with Water Service Providers – where excellence meets hydration."
              ghLink="https://github.com/mohsinchd/water-service-providers"
              demoLink="https://water-service-provider-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Github Finder"
              description="GitHub Finder, a dynamic React and Redux-powered application, brings the GitHub experience to life. Utilizing the GitHub REST API, users can effortlessly discover GitHub profiles with a stunning and intuitive user interface. The application boasts a sleek loading animation, providing a seamless experience while fetching user details. Whether exploring multiple users or diving into the specifics of a single profile, GitHub Finder delivers a modern and engaging interface for every GitHub enthusiast. Elevate your code exploration with GitHub Finder – where innovation meets the GitHub ecosystem."
              ghLink="https://github.com/mohsinchd/React-JS-Redux-Js-GithubFinderApplication"
              demoLink="https://github-finder-six-mocha.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
