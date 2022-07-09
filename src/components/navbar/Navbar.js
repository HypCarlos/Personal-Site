import React from "react";
import "../navbar/navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="left-half">
        <div className="navbar-header">
          <h1 style={{ color: "white" }}>[Carlos A. Cordero]</h1>
        </div>
      </div>
      <div className="right-half">
        <div className="nav-buttons">
          <ul>
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              {" "}
              <a href="/">About</a>
            </li>
            <li>
              {" "}
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
