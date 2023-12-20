import React from "react";
import "./Experience.scss";
import data from "../../../data.json";
import FadeInAnimation from "../Animations/FadeInAnimation/FadeInAnimation";
import { MdDoubleArrow } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import TextReveal from "../Animations/TextReveal/TextReveal";

const Experience = ({ accentColor }) => {
  return (
    <FadeInAnimation isInView={true} index={1} delay={0.2} duration={1}>
      <div id="experience" className="experienceContainer">
        <TextReveal delay={0.5} duration={1} width="100%">
          <h1 className="heading">
            Experience<span className="green">.</span>
          </h1>
        </TextReveal>
        <div className="experience">
          {data.experiences.map((experience, index) => (
            <FadeInAnimation
              key={index}
              isInView={true}
              index={index + 1}
              delay={0.05 * (index + 1)}
              duration={1}
            >
              <section className="singleExperience">
                <div className="workplace">
                  <div className="place">
                    <MdDoubleArrow
                      style={{ color: `${accentColor}` }}
                      size={30}
                    />
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience.company}
                      <span className="green">.</span>
                    </a>
                  </div>
                  <h3 className="green">{experience.position}</h3>
                  <p className="flexDesign">
                    <BiWorld style={{ color: `${accentColor}` }} />
                    {experience.location}
                  </p>
                  <p className="flexDesign">
                    <FaRegCalendarAlt style={{ color: `${accentColor}` }} />
                    {experience.startDate} - {experience.endDate}
                  </p>
                </div>
                <ul className="responsibility">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </section>
            </FadeInAnimation>
          ))}
        </div>
      </div>
    </FadeInAnimation>
  );
};

export default Experience;
