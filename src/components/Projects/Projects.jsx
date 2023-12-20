import React from "react";
import "./Projects.scss";
import data from "../../../data.json";
import FadeInAnimation from "../Animations/FadeInAnimation/FadeInAnimation";
import { GoProjectSymlink } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import AnimatedText from "../Animations/AnimatedText/AnimatedText";
import TextReveal from "../Animations/TextReveal/TextReveal";

const Projects = ({ accentColor }) => {
  const baseColor = "var(--color)";

  return (
    <>
      <FadeInAnimation isInView={true} index={1} delay={0.2} duration={1}>
        <div id="projects" className="projectsContainer">
          <TextReveal delay={0.5} duration={1} width="100%">
            <h1 className="heading">
              Projects<span className="green">.</span>
            </h1>
          </TextReveal>
          <div className="projects">
            {data.projects.map((project, index) => (
              <FadeInAnimation
                key={index}
                isInView={true}
                index={index + 1}
                delay={0.03 * (index + 1)}
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
                        className="glitch"
                      >
                        <FaExternalLinkAlt
                          style={{ color: `${baseColor}` }}
                          size={11}
                        />
                        <AnimatedText
                          datasetValue={"Live Demo"}
                          startDelay={0}
                          hoverEffect={true}
                        >
                          <span>Live Demo</span>
                        </AnimatedText>
                      </a>
                    )}
                  </div>
                  <div className="technologiesContainer">
                    {project.technologies.map((tech, index) => (
                      <FadeInAnimation
                        key={index}
                        isInView={true}
                        index={index + 1}
                        delay={0.01 * (index + 1)}
                        duration={1}
                      >
                        <li key={index}>{tech}</li>
                      </FadeInAnimation>
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
                      <b className="">Github:</b>
                    </div>
                    <div className="flexDesign glitch">
                      {project.sourceCode.frontend && (
                        <a
                          href={project.sourceCode.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AnimatedText
                            datasetValue={"Frontend"}
                            startDelay={0}
                            hoverEffect={true}
                          >
                            Frontend
                          </AnimatedText>
                        </a>
                      )}
                      {project.sourceCode.backend && (
                        <a
                          href={project.sourceCode.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AnimatedText
                            datasetValue={"Backend"}
                            startDelay={0}
                            hoverEffect={true}
                          >
                            Backend
                          </AnimatedText>
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
