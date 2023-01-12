import React from "react";
import "../homepage/homepage.css";
import Navbar from "../navbar/Navbar";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Spline from '@splinetool/react-spline';
import Banner from "../banner/Banner";



//COMPONENTS

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="header">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="header-content">
        

        {/* <Spline scene="https://prod.spline.design/8hHGoxrB4NPFePK8/scene.splinecode" /> */}
        <Spline scene="https://prod.spline.design/tCQ6KR1ZlaaoKBy7/scene.splinecode" />

        {/* <Spline id="spline" scene="https://prod.spline.design/U5OABLgXnOgXNjhW/scene.splinecode" /> */}

        {/* <Spline id = "spline" scene="https://prod.spline.design/XpQZCA1OCD8cSVd9/scene.splinecode" /> */}
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
