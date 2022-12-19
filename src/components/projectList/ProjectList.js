import React from "react";
import "../projectList/projectlist.css";

function ProjectItems({img, link, name,}) {
    return (
        <div id = {name} className="items-container">
        <div className="card-container">
        <div className="card-browser">
        <div className="p-circle" style={{ backgroundColor: "red" }}></div>
        <div className="p-circle" style={{ backgroundColor: "orange" }}></div>
        <div
          className="p-circle"
          style={{ backgroundColor: "limegreen" }}
          
        ></div>
        <div className="name-path">
        <p>$Carlos/{name}</p>
        </div>
        </div>
        <a href= {link} target= "_blank">
          <img className = "p-img" src= {img} alt= "pic" />
        </a>
        </div>
        </div>
        
    )
}

export default ProjectItems;