import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";
import logo from "../../assets/logoS.png";
import DarkModeToggle from "react-dark-mode-toggle";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const accentColor = "var(--accent)";
  // State to manage the color scheme
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Function to toggle between light and dark mode
  const toggleColorMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // useEffect to update the color scheme when the component mounts
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  return (
    <div className="navbar">
      <section className="topNavbar">
        <div className="image">
          <img src={logo} alt="" draggable="false" />
        </div>
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
        <div className="darkButton">
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleColorMode}
            size={25}
          />
          <DarkModeToggle
            onChange={toggleColorMode}
            checked={isDarkMode}
            size={50}
          />
        </div>
      </section>

      <div className="leftNavbar">
        <div className="navItems">
          <Link to="about" spy={true} smooth={true} offset={-90} duration={500}>
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Skills
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Exprience
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
