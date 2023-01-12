import React from "react";
import "../navbar/navbar.css";
import TypeWriterEffect from "react-typewriter-effect";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="left-half">
        <div className="navbar-header">
       <h1 id= "text" > <TypeWriterEffect
            color = "white"
            startDelay={0}
            cursorColor="white"

            multiText={[
              "Hello!",
              "its",
              "[Carlos A. Cordero]",
            ]}
            typeSpeed={80}
            loop={true}
          />
          </h1>
        
        </div>
      </div>
      <div className="right-half">
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
    </div>
  );
}

export default Navbar;
