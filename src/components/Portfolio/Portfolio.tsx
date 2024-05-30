import React from "react";

import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Works from "./Works/Works";

const Portfolio: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Works />
      <Footer />
    </>
  );
};

export default Portfolio;
