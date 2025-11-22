"use client";

import "./ContactMe.scss";
import FadeInAnimation from "../Animations/FadeInAnimation/FadeInAnimation";
import AnimatedText from "../Animations/AnimatedText/AnimatedText";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import TextReveal from "../Animations/TextReveal/TextReveal";

const ContactMe = () => {
  const handleClick = () => {
    window.location.href = "mailto:atefarmanshishir93@gmail.com";
  };

  return (
    <section className="container">
      <FadeInAnimation isInView={true} index={1} delay={0.2} duration={1}>
        <div id="contact" className="contactContainer">
          <TextReveal delay={0.5} duration={1} width="100%">
            <p className="heading commonHeading">
              Contact<span className="green">.</span>
            </p>
          </TextReveal>
          <p className="contact">
            Are you interested in hiring me for a project or exploring
            collaboration opportunities? Feel free to reach out via email at{" "}
            <span className="green">atefarmanshishir93@gmail.com</span>
            I&apos;m open to new opportunities and excited about potential
            collaborations. Let&apos;s connect and discuss how we can work
            together to achieve great things!
          </p>
          <button onClick={handleClick}>
            <a href="mailto:atefarmanshishir93@gmail.com" className="glitch">
              <AnimatedText
                datasetValue={"Email Me!"}
                startDelay={0}
                hoverEffect={true}
              >
                Email Me!
              </AnimatedText>
              <MdOutlineKeyboardDoubleArrowRight />
            </a>
          </button>
        </div>
      </FadeInAnimation>
    </section>
  );
};

export default ContactMe;
