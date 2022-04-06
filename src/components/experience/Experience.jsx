import React from "react";
import "./experience.css";
import { BsPatchCheckFill, BsFillBootstrapFill } from "react-icons/bs";
import { DiReact, DiCss3, DiJavascript1, DiSass } from "react-icons/di";
import { RiHtml5Line } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { Icon } from "@iconify/react";
const Experience = () => {
  return (
    <section id="experience">
      <h5>The skills I Have</h5>
      <h2>My experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Technical Skills</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>HTML5</h4>
                <Icon
                  icon="vscode-icons:file-type-html"
                  style={{ fontSize: "3rem" }}
                />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>CSS3</h4>
                <Icon
                  icon="vscode-icons:file-type-css"
                  style={{ fontSize: "3rem" }}
                />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>JAVASCRIPT</h4>
                <Icon icon="logos:javascript" style={{ fontSize: "2rem" }} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>React JS</h4>
                <Icon icon="logos:react" style={{ fontSize: "2rem" }} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>SASS</h4>
                <Icon icon="logos:sass" style={{ fontSize: "2rem" }} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Boostrap</h4>
                <BsFillBootstrapFill color="blue" size="2rem" />
              </div>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Material UI</h4>
                <Icon icon="logos:material-ui" style={{ fontSize: "2rem" }} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>Node Js</h4>
                <Icon icon="logos:nodejs" style={{ fontSize: "2rem" }} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>Express Js</h4>
                <Icon
                  icon="logos:express"
                  style={{
                    fontSize: "2rem",
                  }}
                />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>Mongo DB</h4>
                <Icon
                  icon="vscode-icons:file-type-mongo"
                  style={{ fontSize: "2rem" }}
                />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>GitHub</h4>
                <Icon icon="logos:github-icon" style={{ fontSize: "2rem" }} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Figma</h4>
                <Icon icon="logos:figma" style={{ fontSize: "2rem" }} />
              </div>
            </article>
          </div>
        </div>
        <div className="experience-backend">
          <h3>Soft Skills and Languages</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>Spanish(Native)</h4>
                <Icon icon="openmoji:flag-spain" style={{ fontSize: "2rem" }} />
              </div>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>Catalan(Native)</h4>
                <Icon
                  icon="openmoji:catalonia-flag"
                  style={{ fontSize: "2rem" }}
                />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>English(Proficiency)</h4>
                <Icon
                  icon="openmoji:flag-united-kingdom"
                  style={{ fontSize: "2rem" }}
                />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>Empathy</h4>
                <Icon icon="ri:empathize-line" style={{ fontSize: "2rem" }} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Team Work</h4>
                <Icon icon="ps:people-team" style={{ fontSize: "2rem" }} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Problem-Solving</h4>
                <Icon
                  icon="icon-park-outline:thinking-problem"
                  style={{ fontSize: "2rem" }}
                />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Adaptability</h4>
                <Icon
                  icon="ic:outline-published-with-changes"
                  style={{ fontSize: "2rem" }}
                />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Willigness to learn</h4>
                <Icon
                  icon="eos-icons:machine-learning-outlined"
                  style={{ fontSize: "2rem" }}
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
