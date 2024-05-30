import React from "react";

import styles from "./Skills.module.css";

import Container from "../../Container/Container";

import Title from "./Title/Title";
import scroll from "/src/assets/scroll.svg";
import Service from "./Service/Service";
import Highlights from "./Highlights/Highlights";

const Skills: React.FC = () => {
  return (
    <section className={styles.skills}>
      <Container>
        <div className={styles.skills__inner}>
          <img src={scroll} className={styles.scroll} />
          <Title />
          <Service />
          <Highlights />
        </div>
      </Container>
    </section>
  );
};

export default Skills;
