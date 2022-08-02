import React from "react";
import ProjectItems from '../projectItems/ProjectItems';
import "../projects/projects.css";

function Projects() {
  return (
    <div className="projects">
    <div className="projects-container">
      <div className="left-half">
        <div className="projects-banner">
          <h2> Recent Projects.*</h2>
        </div>
      </div>
      <div className="right-half">
        <div className="projects-info">
          <p>
          Hello! I'm Carlos Cordero. I recently graduated from Florida International University with a Bachelors of Science.
          in Computer Science I love to be able to bring ideas to life and be able to inspire others. I currently enjoy working
          with react and working on both the design process and implementation of frontend work.
          </p>
        </div>
      </div>
    </div>
    <ProjectItems/>
    </div>
  );
}

export default Projects;
