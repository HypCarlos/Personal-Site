import React from "react";
import "../homepage/homepage.css";
import Navbar from "../navbar/Navbar";
import FOAM from "../../img/Foam.gif";
import Projects from "../projects/Projects";
// import Footer from "../footer/Footer";

//COMPONENTS

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="header">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="header-content">
          <img id="foam" src={FOAM} alt="foam" />
        </div>
      </div>
      <div className="projects-container">
        <Projects />
      </div>
    </div>
  );
}
export default Homepage;
