import React from "react";
import "../main/main.css";
import FOAM from "../../img/Foam.gif";
import TypeWriterEffect from "react-typewriter-effect";



//COMPONENTS
import Footer from "../footer/Footer";

function Main() {
  return (
    <div className="flexbox-container">
      <div className="main-container">
        <div className="foam-container">
       

          <img id="foam-img" src={FOAM} alt="foam" />
        </div>
        <div className="main-text">
          <TypeWriterEffect
            id="text"
            startDelay={100}
            cursorColor="black"
            multiText={[
              "SITE IS CURRRENTLY IN PROGRESS.",
              "THANKS.",
              "BTW, IT'S CARLOS :)",
            ]}
            typeSpeed={100}
            loop={true}
          />
        </div>
        <div className="main-sub">
          <h3>Currently listening to:</h3>
          <div className="main-api">
            {/* <img
              id="api-artwork"
              src="https://media.pitchfork.com/photos/5fe1fc4eb35e0eefa6919e92/1:1/w_1080,h_1080,c_limit/Playboi-Carti.jpg"
              alt="api-art"
            /> */}
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *"
              frameBorder="0"
              height="450"
              src="https://embed.music.apple.com/us/playlist/pl.u-PDb4YVVFyXPzAJ"
            ></iframe>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
}
export default Main;
