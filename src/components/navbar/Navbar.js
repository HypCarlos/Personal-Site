import React from "react";
import "../navbar/navbar.css";
import TypeWriterEffect from "react-typewriter-effect";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="nav-buttons">
        <ul>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            {" "}
            <a href="/">About</a>
          </li>
          <li>
            {" "}
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
