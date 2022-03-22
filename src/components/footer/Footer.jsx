import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Veronica Ortega
      </a>
      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a
          href="https://linkedin.com/in/verónica-ortega-"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Veronica43"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaGithub />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy;Veronica Ortega 💜</small>
      </div>
    </footer>
  );
};

export default Footer;
