import React from "react";

import styles from "./Works.module.css";

import Container from "../../Container/Container";
import scroll from "/src/assets/scroll.svg";
import Title from "./Title/Title";
import Projects from "./Projects/Projects";

const Works: React.FC = () => {
  return (
    <section className={styles.works}>
      <Container>
        <div className={styles.works__inner}>
          <img src={scroll} alt="scroll" />
          <Title />
          
          <Projects />
        </div>
      </Container>
    </section>
  );
};

export default Works;
