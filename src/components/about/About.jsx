import React from "react";
import "./about.css";
import Vero from "../../assets/cat.jpeg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={Vero} alt="me" className="img" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card"></article>
            <article className="about-card"></article>
            <article className="about-card"></article>
          </div>
          <p>
            I have a passion for technology, I did the FullStack Bootcamp at
            Nuclio Digital School in Barcelona, ​​where I learned Javascript
            ES6, HTML5, CSS3 and ReactJs,also I'm knowledgeable in
            NodeJs,Express,MongoDB and the creation of Rest Api,right now I'm
            looking for my first opportunity in the technology industry and
            continuing to study and doing my own projects. In my personal life,I
            like sports,work on my projects,study,spend time with family and
            friends,movies and nature.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
