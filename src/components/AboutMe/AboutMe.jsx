import React from "react";
import "./AboutMe.scss";
import main2 from "../../assets/main2.jpg";
import FadeInAnimation from "../Animations/FadeInAnimation/FadeInAnimation";

const AboutMe = () => {
  return (
    <>
      <div id="about" className="about">
        <FadeInAnimation isInView={true} index={1} delay={0.2} duration={1}>
          <h1 className="heading">
            About Me<span className="green">.</span>
          </h1>
        </FadeInAnimation>
        <FadeInAnimation isInView={true} index={1} delay={0.2} duration={1}>
          <div className="aboutContainer">
            <div>
              <img src={main2} draggable="false" />
            </div>
            <div>
              <p>
                Hello there! I&apos;m{" "}
                <span className="green">
                  <b>Atef Arman SHiSHiR</b>
                </span>
                , if you haven&apos;t already gathered that by now and my
                journey in the realm of web development has been fueled by an
                insatiable passion for coding and an unyielding curiosity.
                I&apos;ve become a dynamic force in this ever-evolving world,
                driven by an unwavering commitment to excellence.
                <br />
                <br />
                Over the past
                <span className="green">
                  {" "}
                  <b>two years</b>
                </span>
                , I&apos;ve charted my own path to becoming a proficient{" "}
                <span className="green">
                  <b>
                    MERN (MongoDB, Express.js, React.js, Node.js) stack
                    developer.
                  </b>
                </span>{" "}
                It&apos;s been an incredible adventure of self-discovery and
                continuous learning. Simultaneously, I&apos;ve delved into the
                intricacies of Django Rest Framework, honing my skills to craft
                seamless and powerful solutions for web development challenges.
              </p>
            </div>
          </div>
        </FadeInAnimation>
      </div>
    </>
  );
};

export default AboutMe;
