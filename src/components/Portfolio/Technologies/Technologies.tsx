import React from "react";

import styles from "./Technologies.module.css";

import Container from "../../Container/Container";
import scroll from "/src/assets/scroll.svg";
import { technologiesData } from "./data/data";
import Item from "./Item/Item";
import { useTranslation } from "react-i18next";

const Technologies: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.technologies}>
      <Container>
        <div className={styles.technologies__inner}>
          <img src={scroll} className={styles.scroll} />
          <h3 className={styles.technologies__title}>
            {t("technologies-title")}
          </h3>
          <p className={styles.technologies__subtitle}>
            {t("technologies-subtitle")}
          </p>
        </div>
        <div className={styles.item__container}>
          {technologiesData.map((item, index) => (
            <Item title={item.title} icon={item.icon} link={item.link} key={index}/>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Technologies;
