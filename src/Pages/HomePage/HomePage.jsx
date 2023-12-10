import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import "./HomePage.scss";
import Layout from "../../components/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="home">
        <HeroSection />
      </div>
    </Layout>
  );
};

export default HomePage;
