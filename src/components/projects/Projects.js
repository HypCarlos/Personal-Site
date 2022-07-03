import React from "react";
import "../projects/projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <div className="left-half">
        <div className="projects-banner">
          <h2> Recent Projects.*</h2>
        </div>
      </div>
      <div className="right-half">
        <div className="projects-info">
          <p>
            I'm probably not the typical designer positioned behind an
            Illustrator artboard adjusting pixels, but I design. Immersed in
            stylesheets tweaking font sizes and contemplating layouts is where
            you'll find me (~_^). I'm committed to creating fluent user
            experiences while staying fashionable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
