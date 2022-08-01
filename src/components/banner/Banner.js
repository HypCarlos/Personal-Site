import React from "react";
import "../banner/banner.css";

function Banner() {
    return (
        <div className="banner-container">
        <div className="left-sliding">
        <marquee className = "marquee" behavior= "scroll" direction="left" scrollamount = "10" height = "20px">
           MIAMI BASED ASPIRING SOFTWARE ENGINEER* / FRONT END DEVELOPER* </marquee>
           </div>
           <div className="right-sliding">
           <marquee className = "marquee" behavior="scroll" direction="right"  scrollamount = "12" height = "20px">
            REACT // JAVA // HTML // CSS // CREATIVE DESIGN // FRONT END // BACK END // </marquee>
            </div>
        
        </div>
    )
}

export default Banner;