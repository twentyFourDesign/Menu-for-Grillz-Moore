import React from "react";
import logo from "../image/logoDark.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div className="image-container">
        <Link to="https://www.jollofbyjara.com">
          <img className="header-image" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="menu-container">
        <h1 className="menu">MENU</h1>
      </div>
    </div>
  );
}

export default Header;
