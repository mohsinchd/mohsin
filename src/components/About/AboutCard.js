import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohsin Shoaib </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am currently employed as a Software Engineer at Cogent Labs.
            <br />I have completed{" "}
            <span className="purple">
              Bachelors of Science in Computer Science
            </span>{" "}
            from The University of Lahore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching / Mentorship
            </li>
            <li className="about-activity">
              <ImPointRight /> Guitars / Singing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Stay hungry, stay foolish"{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
