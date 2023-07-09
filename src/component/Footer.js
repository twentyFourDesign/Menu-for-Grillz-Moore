import React from "react";
import logo from "../image/GrillzAndMoore.png"

function Footer() {
  return (
    <div>
      <div className="small-footer">
        <p>
          <b>OPEN: </b> Tuesday - Saturday (12pm-12am) Sunday (3pm - 12am) 
        </p>
      </div>
      <div className="footer-container">
        <div className="footer-image-container">
          <img className="footer-image" src={logo} alt="logo" />
        </div>
        <div className="footer-details-container">
          <p>&#64;2023 Grillz and Moore</p>
          <p>Owned a s operated by Grillz And Moore Ltd.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
