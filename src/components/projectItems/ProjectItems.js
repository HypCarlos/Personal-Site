import React from "react";
import ProjectList from '../projectList/ProjectList';
import "../../components/projectItems/projectItems.css";
import {projects} from "../../data";




function ProjectItems(props) {
  return (
    <div className="projectItems-container">
      <div className="project-text">
      <h1 className="project-banner">Create.</h1>
      <p className= "project-banner-text">My goal is to bring ideas to life while creating a memorable experience.</p>
    </div>
    <div className="project-tiles">
    {projects.map ((item) => (
      <ProjectList key = {item.id} img ={ item.img} link = {item.link} name = {item.name} />
    ))}
   </div>

    </div>
  );
}
export default ProjectItems;
