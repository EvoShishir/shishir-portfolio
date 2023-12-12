import React, { useState } from "react";
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
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      <PreLoader loading={loading} />
      <Layout>
        <div className="home">
          <HeroSection />
          <AboutMe />
          <Skills />
          <Banner />
          <Experience />
          <Projects />
          <ContactMe />
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
