import React  from "react";
import ProjectItems from '../projectItems/ProjectItems';
import "../projects/projects.css";



function Projects() {
  return (
    <div className="projects">
    <div className="projects-container">
      <div className="left-half">
        <div className="projects-banner">
          <h2> Recent Projects.* </h2>
          {/* <h1>📁</h1> */}
        </div>
      </div>
      <div className="right-half">
        <div className="projects-info">
          <p>
          Hello! I'm Carlos A Cordero! I recently graduated from Florida International University with a <b> Bachelors of Science
          in Computer Science.</b> I love being able to bring ideas to life and be able to inspire others. I currently enjoy working
          with react on both the design process and implementation of frontend work. 
        <br/> <br/> <br/>
          I have experience working with <b>Java, React, HTML5, CSS, Python, R, Node.js </b>, and continue to keep learning new technologies and frameworks.
          <br/> <br/> <br/>
          My goal is to be able to push boundaries with software in order to complement lives.
          </p>
 
        </div>
      </div>

    </div>
  

    <ProjectItems/>
    </div>
  );
}

export default Projects;
