import "./AboutMe.scss";
import FadeInAnimation from "../Animations/FadeInAnimation/FadeInAnimation";
import TextReveal from "../Animations/TextReveal/TextReveal";

const AboutMe = () => {
  return (
    <section className="container">
      <FadeInAnimation isInView={true} index={1} delay={0.2} duration={1}>
        <div id="about" className="about">
          <TextReveal delay={0.5} duration={1} width="100%">
            <p className="heading commonHeading">
              About Me<span className="green">.</span>
            </p>
          </TextReveal>
          <div className="aboutContainer">
            <FadeInAnimation isInView={true} index={1} delay={0.2} duration={1}>
              <div>
                <img src="/main2.jpg" draggable="false" />
              </div>
            </FadeInAnimation>
            <div>
              <FadeInAnimation
                isInView={true}
                index={1}
                delay={0.2}
                duration={1}
              >
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
                  intricacies of Django Rest Framework, honing my skills to
                  craft seamless and powerful solutions for web development
                  challenges.
                </p>
              </FadeInAnimation>
            </div>
          </div>
        </div>
      </FadeInAnimation>
    </section>
  );
};

export default AboutMe;
