import React from "react";
import ProjectList from '../projectList/ProjectList';
import "../../components/projectItems/projectItems.css";
import {projects} from "../../data";


function ProjectItems(props) {
  return (
    <div className="projectItems-container">
      <div className="project-text">
      <h1 className="project-banner">Create📁</h1>
     <p className= "project-banner-text">The best way to learn is to create. Here's what I've been working on.</p> 
    </div>
    <br/>
    <a id = "folder1" href="https://github.com/HypCarlos" target="_blank">
            <img
              src="https://iconarchive.com/download/i99322/dtafalonso/yosemite-flat/Folder.ico"
              alt="Git"
              height="60px"
            ></img>
            <h4>Github</h4>
          </a>
    <div className="project-tiles">
    {projects.map ((item) => (
      <ProjectList key = {item.id} img ={ item.img} link = {item.link} name = {item.name} />
    ))}
   </div>
   <a id = "folder2" href="https://www.linkedin.com/in/carlosacordero/" target="_blank">
            <img
              src="https://iconarchive.com/download/i99322/dtafalonso/yosemite-flat/Folder.ico"
              alt="Linkedin"
              height="80px"
            ></img>
            <h4>Linkedin</h4>
          </a>
    </div>
  );
}
export default ProjectItems;
