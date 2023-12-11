import React from "react";
import "./Skills.scss";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import {
  SiDjango,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {
  FaBootstrap,
  FaCss3,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaSass,
} from "react-icons/fa6";

const Skills = () => {
  return (
    <div id="skills" className="skillsContainer">
      <h1 className="heading">
        Skills<span className="green">.</span>
      </h1>
      <div>
        <h4>
          Following are some of the <span className="green">skills</span> I have
          gathered over the years
        </h4>
        <div className="skillContainer">
          <div className="logo">
            <p>
              <IoLogoJavascript />
            </p>
            <small>JavaScript</small>
          </div>
          <div className="logo">
            <p>
              <SiTypescript />
            </p>
            <small>TypeScript</small>
          </div>
          <div className="logo">
            <p>
              <FaReact />
            </p>
            <small>React.JS</small>
          </div>
          <div className="logo">
            <p>
              <FaNodeJs />
            </p>
            <small>NodeJS</small>
          </div>
          <div className="logo">
            <p>
              <SiExpress />
            </p>
            <small>Express.JS</small>
          </div>
          <div className="logo">
            <p>
              <SiMongodb />
            </p>
            <small>MongoDB</small>
          </div>
          <div className="logo">
            <p>
              <FaGithub />
            </p>
            <small>Github</small>
          </div>
          <div className="logo">
            <p>
              <FaHtml5 />
            </p>
            <small>HTML</small>
          </div>
          <div className="logo">
            <p>
              <FaCss3 />
            </p>
            <small>CSS</small>
          </div>

          <div className="logo">
            <p>
              <FaSass />
            </p>
            <small>SCSS</small>
          </div>
          <div className="logo">
            <p>
              <FaPython />
            </p>
            <small>Python</small>
          </div>
          <div className="logo">
            <p>
              <FaDatabase />
            </p>
            <small>SQL</small>
          </div>
          <div className="logo">
            <p>
              <FaBootstrap />
            </p>
            <small>Bootstrap</small>
          </div>
          <div className="logo">
            <p>
              <IoLogoFirebase />
            </p>
            <small>Firebase</small>
          </div>
          <div className="logo">
            <p>
              <SiTailwindcss />
            </p>
            <small>TailwindCSS</small>
          </div>
          <div className="logo">
            <p>
              <SiDjango />
            </p>
            <small>Django Rest Framework</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
