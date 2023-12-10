import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logoS.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="" />
      </div>

      <div className="navItems">
        <a href="">About</a>
        <a href="">Skills</a>
        <a href="">Exprience</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
