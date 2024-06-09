import React from "react";

import styles from "./Technologies.module.css";

import Container from "../../Container/Container";
import scroll from "/src/assets/scroll.svg";

const Technologies: React.FC = () => {
  return (
    <section className={styles.technologies}>
      <Container>
        <div className={styles.technologies__inner}>
          <img src={scroll} className={styles.scroll} />
          <h3 className={styles.technologies__title}>Technologies</h3>
          <p className={styles.technologies__subtitle}>
            The technologies that I studied and used when creating projects.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Technologies;
