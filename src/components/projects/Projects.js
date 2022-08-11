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
          Hello! I'm Carlos A Cordero! I recently graduated from Florida International University with a Bachelors of Science.
          in Computer Science. I love to be able to bring ideas to life and be able to inspire others. I currently enjoy working
          with react and working on both the design process and implementation of frontend work.

          </p>
        </div>
      </div>

    </div>
    {/* <div className="project-links">
      <a href="https://github.com/HypCarlos">
        <h4>
          Link to my GitHub!
        </h4>
      </a>
      <a>
        <h4>
          Link to my Linkedin!
        </h4>
      </a>
    </div> */}
    <ProjectItems/>
    </div>
  );
}

export default Projects;
