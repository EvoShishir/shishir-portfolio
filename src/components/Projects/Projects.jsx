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
    <section className="container">
      <FadeInAnimation isInView={true} index={1} delay={0.2} duration={1}>
        <div id="projects" className="projectsContainer">
          <TextReveal delay={0.5} duration={1} width="100%">
            <p className="heading commonHeading">
              Projects<span className="green">.</span>
            </p>
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
                      <b className="glitch">Github:</b>
                    </div>
                    <div className="flexDesign glitch">
                      {project.sourceCode.map((source, index) => (
                        <a
                          key={index}
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AnimatedText
                            datasetValue={source.label}
                            startDelay={0}
                            hoverEffect={true}
                          >
                            {source.label}
                          </AnimatedText>
                        </a>
                      ))}
                    </div>
                  </div>
                </section>
              </FadeInAnimation>
            ))}
          </div>
        </div>
      </FadeInAnimation>
    </section>
  );
};

export default Projects;
