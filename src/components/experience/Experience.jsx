import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The skills I Have</h5>
      <h2>My experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>HTML5</h4>
                <progress max="100" value="80">
                  70%
                </progress>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>CSS3</h4>
                <progress max="100" value="80"></progress>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>JAVASCRIPT</h4>
                <progress max="100" value="60"></progress>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>React JS</h4>
                <progress max="100" value="60"></progress>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>SASS</h4>
                <progress max="100" value="80"></progress>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Boostrap</h4>
                <progress max="100" value="80"></progress>
              </div>
            </article>
          </div>
        </div>
        <div className="experience-backend">
          <h3>Other Skils</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>Node Js</h4>
                <progress max="100" value="30"></progress>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>Express Js</h4>
                <progress max="100" value="30"></progress>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>Mongo DB</h4>
                <progress max="100" value="30"></progress>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>GitHub</h4>
                <progress max="100" value="80"></progress>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Figma</h4>
                <progress max="100" value="50"></progress>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
