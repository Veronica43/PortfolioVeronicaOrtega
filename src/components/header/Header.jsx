import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/vero.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Veronica Ortega</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="profile-pic" className="picture-of-me" />
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
