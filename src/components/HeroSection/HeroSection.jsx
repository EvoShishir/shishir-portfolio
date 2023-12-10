import React from "react";
import "./heroSection.scss";
import photo1 from "../../assets/main.jpg";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div>
        <div>
          <h1>
            Hi, I&apos;m SHISHIR<span className="green">!</span>
          </h1>
          <p className="title">
            I&apos;m a{" "}
            <span className="green">
              <b>Fullstack Web Developer</b>
            </span>
          </p>
          <p>
            Self taught software engineer experienced in React.JS, Node.JS,
            Express.JS, MongoDB and Django Rest Framework.
          </p>
        </div>
        <div className="heroButtons">
          <button>Contact Me</button>
          <button>
            <a href="https://drive.google.com/file/d/1LczSc-i2H2ERGclWsmojIh4C1IZIrjhq/view?usp=drive_link">
              My Resume <MdOutlineKeyboardDoubleArrowRight />
            </a>
          </button>
        </div>
      </div>
      <div>
        <img src={photo1} alt="" draggable="false" />
      </div>
    </div>
  );
};

export default HeroSection;
