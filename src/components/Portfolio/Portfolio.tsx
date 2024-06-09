import React from "react";

import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Works from "./Works/Works";
import Contacts from "./Contacts/Contacts";
import Technologies from "./Technologies/Technologies";

const Portfolio: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Works />
      <Technologies />
      <Contacts />
      <Footer />
    </>
  );
};

export default Portfolio;
