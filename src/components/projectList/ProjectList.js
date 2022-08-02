import React from "react";
import "../projectList/projectlist.css";

function ProjectItems() {
    return (
        <div className="items-container">
        <div className="card-container">
        <div className="card-browser">
        <div className="p-circle" style={{ backgroundColor: "red" }}></div>
        <div className="p-circle" style={{ backgroundColor: "orange" }}></div>
        <div
          className="p-circle"
          style={{ backgroundColor: "limegreen" }}
        ></div>
        </div>
        </div>

        
        </div>
    )
}

export default ProjectItems;