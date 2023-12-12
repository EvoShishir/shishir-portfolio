import React from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";
import logo from "../../assets/logoS.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="topNavbar">
        <div className="navItemsTop">
          <a
            href="https://www.facebook.com/atefarmanshishir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/atefarmanshishir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/atefarman15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://bd.linkedin.com/in/atefarmanshishir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/EvoShishir"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
        </div>
      </div>
      <div className="leftNavbar">
        <div>
          <img src={logo} alt="" draggable="false" />
        </div>
        <div className="navItems">
          <Link to="about" spy={true} smooth={true} offset={-53} duration={500}>
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-53}
            duration={500}
          >
            Skills
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Exprience
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Projects
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
