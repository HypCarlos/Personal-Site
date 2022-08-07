import React from "react";
import ProjectList from '../projectList/ProjectList';
import "../../components/projectItems/projectItems.css";
import {projects} from "../../data";




function ProjectItems(props) {
  return (
    <div className="projectItems-container">
   
    <div className="project-tiles">
    {projects.map ((item) => (
      <ProjectList key = {item.id} img ={ item.img} link = {item.link} />
    ))}
   </div>
   {/* <div className="project-text">
      <h1 className="project-banner">Create & Inspire. It's Carlos</h1>
      <p className= "project-banner-text">My goal is to bring ideas to life while creating a memorable experience.</p>
    </div> */}
    </div>
  );
}
export default ProjectItems;
