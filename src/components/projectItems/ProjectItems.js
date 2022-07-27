import React from "react";
import "../../components/projectItems/projectitems.css";

function ProjectItems(props) {
  return (
    <div className="projectItems-container">
      <div className="project-items">
        <div className="p-circle" style={{ backgroundColor: "red" }}></div>
        <div className="p-circle" style={{ backgroundColor: "orange" }}></div>
        <div
          className="p-circle"
          style={{ backgroundColor: "limegreen" }}
        ></div>
      </div>
    </div>
  );
}
export default ProjectItems;
