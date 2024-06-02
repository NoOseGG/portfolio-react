import React from "react";

import styles from "./Hero.module.css";

import Container from "../../Container/Container";
import Card from "./Card/Card";
import Info from "./Info/Info";
import Highlights from "./Highlights/Highlights";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Container>
        <div className={styles.hero__inner}>
          <h1 className={styles.hero__title}>{t('hero-title')}</h1>
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
