import React from "react";
import "../footer/footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <div className="footer-icons">
          <h4>Follow me.</h4>
          <a href="https://twitter.com/OgPesci">
            <img
              src="https://img.icons8.com/material-rounded/24/000000/twitter.png"
              alt="twitter"
            ></img>
          </a>
          <a href="https://github.com/HypCarlos">
            <img
              src="https://img.icons8.com/material-outlined/24/000000/github.png"
              alt="Git"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
