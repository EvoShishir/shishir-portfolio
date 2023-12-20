import React from "react";
import "./Skills.scss";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import {
  SiDjango,
  SiExpress,
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
import FadeInAnimation from "../Animations/FadeInAnimation/FadeInAnimation";
import TextReveal from "../Animations/TextReveal/TextReveal";

const Skills = () => {
  const skillsList = [
    {
      logo: <IoLogoJavascript />,
      title: "JavaScript",
    },
    {
      logo: <SiTypescript />,
      title: "TypeScript",
    },
    {
      logo: <FaReact />,
      title: "React.JS",
    },
    {
      logo: <FaNodeJs />,
      title: "NodeJS",
    },
    {
      logo: <SiExpress />,
      title: "Express.JS",
    },
    {
      logo: <SiMongodb />,
      title: "MongoDB",
    },
    {
      logo: <FaGithub />,
      title: "Github",
    },
    {
      logo: <FaHtml5 />,
      title: "HTML",
    },
    {
      logo: <FaCss3 />,
      title: "CSS",
    },
    {
      logo: <FaSass />,
      title: "SCSS",
    },
    {
      logo: <FaPython />,
      title: "Python",
    },
    {
      logo: <FaDatabase />,
      title: "SQL",
    },
    {
      logo: <FaBootstrap />,
      title: "Bootstrap",
    },
    {
      logo: <IoLogoFirebase />,
      title: "Firebase",
    },
    {
      logo: <SiTailwindcss />,
      title: "TailwindCSS",
    },
    {
      logo: <SiDjango />,
      title: "Django Rest Framework",
    },
  ];

  return (
    <>
      <FadeInAnimation isInView={true} index={1} delay={0.2} duration={1}>
        <div id="skills" className="skillsContainer">
          <TextReveal delay={0.5} duration={1} width="100%">
            <h1 className="heading">
              Skills<span className="green">.</span>
            </h1>
          </TextReveal>
          <div>
            <h4>
              Following are some of the <span className="green">skills</span> I
              have gathered over the years
            </h4>
            <div className="skillContainer">
              {skillsList.map((skill, index) => (
                <div key={index} className="logo">
                  <FadeInAnimation
                    isInView={true}
                    index={index}
                    duration={0.6}
                    delay={0.03}
                  >
                    <p>{skill.logo}</p>
                    <small>{skill.title}</small>
                  </FadeInAnimation>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInAnimation>
    </>
  );
};

export default Skills;
