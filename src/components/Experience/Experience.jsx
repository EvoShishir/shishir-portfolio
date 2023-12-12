import React from "react";
import "./Experience.scss";
import { MdDoubleArrow } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";

const Experience = () => {
  return (
    <div id="experience" className="experienceContainer">
      <h1 className="heading">
        Experience<span className="green">.</span>
      </h1>
      <div className="experience">
        <section>
          <div className="workplace">
            <div className="place">
              <MdDoubleArrow color="#55e6a5" size={30} />
              <h2>
                <a href="https://www.linkedin.com/company/aak-telesciences/mycompany/">
                  AAK TELE-SCIENCE, INC<span className="green">.</span>
                </a>
              </h2>
            </div>
            <h3 className="green">Frontend Developer(React.JS)</h3>
            <p className="flexDesign">
              <BiWorld color="#55e6a5" />
              Davis, CA
            </p>
            <p className="flexDesign">
              <FaRegCalendarAlt color="#55e6a5" />
              September, 2023 - Present
            </p>
          </div>
          <ul className="responsibility">
            <li>
              Designed and implemented responsive interfaces for optimal user
              experiences.
            </li>
            <li>
              Proficient in using Redux for efficient data flow in complex
              applications.
            </li>
            <li>
              Created and maintained modular, reusable components for
              streamlined development.
            </li>
            <li>
              Implemented best practices for consistent experiences across
              browsers.
            </li>
            <li>
              Worked closely with designers to translate mockups into
              interactive React components.
            </li>
          </ul>
        </section>
        <section>
          <div className="workplace">
            <div className="place">
              <MdDoubleArrow color="#55e6a5" size={30} />
              <h2>
                <a href="https://www.linkedin.com/company/innovate-wave/">
                  Innovate Wave<span className="green">.</span>
                </a>
              </h2>
            </div>
            <h3 className="green">Fullstack Web Developer(Intern)</h3>
            <p className="flexDesign">
              <BiWorld color="#55e6a5" />
              Dhaka, Bangladesh
            </p>
            <p className="flexDesign">
              <FaRegCalendarAlt color="#55e6a5" />
              March, 2023 - August, 2023
            </p>
          </div>
          <ul className="responsibility">
            <li>
              Contributed to full-stack development and deployment of web
              applications.
            </li>
            <li>
              Assisted in optimizing databases for efficient data handling.
            </li>
            <li>Contributed to creating and integrating RESTful APIs.</li>
            <li>
              Involved in developing user-friendly interfaces using modern
              frameworks.
            </li>
            <li>
              Worked collaboratively in an Agile environment, participating in
              planning and iterative development.
            </li>
          </ul>
        </section>
        <section>
          <div className="workplace">
            <div className="place">
              <MdDoubleArrow color="#55e6a5" size={30} />
              <h2>
                Freelance Web Dev<span className="green">.</span>
              </h2>
            </div>
            <h3 className="green">Fullstack Web Developer</h3>
            <p className="flexDesign">
              <BiWorld color="#55e6a5" />
              World
            </p>
            <p className="flexDesign">
              <FaRegCalendarAlt color="#55e6a5" />
              February, 2022 - Present
            </p>
          </div>
          <ul className="responsibility">
            <li>Led MERN app development and deployment on cloud platforms.</li>
            <li>
              Managed MongoDB databases, optimizing schemas for performance.
            </li>
            <li>
              Developed RESTful APIs with Express.js, integrating third-party
              APIs.
            </li>
            <li>
              Created responsive interfaces with React.js, using Redux for state
              management.
            </li>
            <li>
              Collaborated in Agile settings, ensuring timely delivery with
              cross-functional teams.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Experience;
