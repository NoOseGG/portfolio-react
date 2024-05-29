import React from "react";

import styles from "./Hero.module.css";

import Container from "../../Container/Container";
import Card from "./Card/Card";
import Info from "./Info/Info";
import Highlights from "./Highlights/Highlights";

const Hero: React.FC = () => {
  return (
    <section>
      <Container>
        <div className={styles.hero__inner}>
          <h1 className={styles.hero__title}>Developer</h1>
          <div className={styles.hero__content}>
            <Card />
            <div className={styles.card__container}>
              <Info />
              <Highlights />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
