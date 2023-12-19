import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import "./HomePage.scss";
import Layout from "../../components/Layout/Layout";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import Banner from "../../components/Banner/Banner";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";
import ContactMe from "../../components/ContactMe/ContactMe";
import PreLoader from "../../components/PreLoader/PreLoader";

const HomePage = () => {
  const accentColor = "var(--accent)";
  const loaderColor = "#55e6a5";

  const [loading, setLoading] = useState(true);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollToTop();
  }, [loading]);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      <PreLoader
        loaderColor={loaderColor}
        accentColor={accentColor}
        loading={loading}
      />
      <Layout>
        <div className="home">
          <HeroSection accentColor={accentColor} />
          <AboutMe accentColor={accentColor} />
          <Skills accentColor={accentColor} />
          <Banner accentColor={accentColor} />
          <Experience accentColor={accentColor} />
          <Projects accentColor={accentColor} />
          <ContactMe accentColor={accentColor} />
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
