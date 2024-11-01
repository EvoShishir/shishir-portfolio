import "./heroSection.scss";
import photo1 from "../../assets/main.jpg";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import FadeInAnimation from "../Animations/FadeInAnimation/FadeInAnimation";
import AnimatedText from "../Animations/AnimatedText/AnimatedText";
import TextReveal from "../Animations/TextReveal/TextReveal";

const HeroSection = () => {
  return (
    <section className="container">
      <FadeInAnimation isInView={true} index={1} delay={1} duration={1}>
        <div className="heroSection">
          <div>
            <div>
              <h1>
                <TextReveal delay={2.5}>
                  Hi, I&apos;m
                  <br className="heroBreak" />{" "}
                  <span>
                    SH<span className="green">i</span>SH
                    <span className="green">i</span>R
                    <span className="green">!</span>
                  </span>
                </TextReveal>
              </h1>
              <p className="title">
                I&apos;m a <br className="heroBreak" />
                <span className="green glitch">
                  <b>
                    <AnimatedText datasetValue="FULLSTACK WEB DEVELOPER">
                      FULLSTACK WEB DEVELOPER
                    </AnimatedText>
                  </b>
                </span>
              </p>
              <p>
                Self taught software engineer experienced in React.JS, Node.JS,
                Express.JS, MongoDB and Django Rest Framework.
              </p>
            </div>
            <div className="heroButtons">
              <a
                href="https://drive.google.com/file/d/1LczSc-i2H2ERGclWsmojIh4C1IZIrjhq/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="glitch">
                  <AnimatedText
                    datasetValue={"MY RESUME"}
                    startDelay={0}
                    hoverEffect={true}
                  >
                    MY RESUME
                  </AnimatedText>
                  <MdOutlineKeyboardDoubleArrowRight />
                </button>
              </a>
            </div>
          </div>
          <div>
            <img src={photo1} alt="" draggable="false" />
          </div>
        </div>
      </FadeInAnimation>
    </section>
  );
};

export default HeroSection;
