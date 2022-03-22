import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a
        href="https://linkedin.com/in/verónica-ortega-"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Veronica43" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
