import React from "react";
import "./Projects.scss";
import data from "../../../data.json";
import FadeInAnimation from "../Animations/FadeInAnimation/FadeInAnimation";
import { GoProjectSymlink } from "react-icons/go";
import { FaExternalLinkAlt, FaLightbulb } from "react-icons/fa";
import { FaGithub, FaRegLightbulb } from "react-icons/fa6";

const Projects = ({ accentColor }) => {
  return (
    <>
      <FadeInAnimation isInView={true} index={1} delay={0.05} duration={1}>
        <div id="projects" className="projectsContainer">
          <h1 className="heading">
            Projects<span className="green">.</span>
          </h1>
          <div className="projects">
            {data.projects.map((project, index) => (
              <FadeInAnimation
                key={index}
                isInView={true}
                index={index + 1}
                delay={0.05 * (index + 1)}
                duration={1}
              >
                <section className="singleProject">
                  <div className="projectHeader">
                    <div className="projectName">
                      <GoProjectSymlink
                        style={{ color: `${accentColor}` }}
                        size={25}
                      />
                      <h2>
                        {project.name}
                        <span className="green">.</span>
                      </h2>
                    </div>
                    {project.liveProject && (
                      <a
                        href={project.liveProject}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                        <span className="green">Live link</span>
                      </a>
                    )}
                  </div>
                  <div className="technologiesContainer">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </div>
                  <p>{project.description}</p>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="source">
                    <div className="flexDesign">
                      <FaGithub style={{ color: `${accentColor}` }} size={23} />
                      <b className="">Source Code:</b>
                    </div>
                    <div className="flexDesign">
                      {project.sourceCode.frontend && (
                        <a
                          href={project.sourceCode.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Frontend
                        </a>
                      )}
                      {project.sourceCode.backend && (
                        <a
                          href={project.sourceCode.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Backend
                        </a>
                      )}
                    </div>
                  </div>
                </section>
              </FadeInAnimation>
            ))}
          </div>
        </div>
      </FadeInAnimation>
    </>
  );
};

export default Projects;
