import React from "react";
import "./portfolio.css";

import { projects } from "../data";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {projects.map(({ id, title, image, description, url, code }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className="portfolio-item-cta">
                <a href={code} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a
                  href={url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
