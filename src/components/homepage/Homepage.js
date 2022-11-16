import React from "react";
import "../homepage/homepage.css";
import Navbar from "../navbar/Navbar";
// import FOAM from "../../img/Foam.gif";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Spline from '@splinetool/react-spline';
import Banner from "../banner/Banner";
import TypeWriterEffect from "react-typewriter-effect";


//COMPONENTS

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="header">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="header-content">
        
        <Spline id = "spline" scene="https://prod.spline.design/XpQZCA1OCD8cSVd9/scene.splinecode" />
        </div>
      </div>
      <div className="banner-container">
        <Banner/>
      </div>
      <div id = "projects" className="projects-container">
        <Projects />
      </div>
      <div id = "contact" className="contact-container">
        <Contact />
      </div>
    
    </div>
  );
}
export default Homepage;
