import React from "react";

import styles from "./Title.module.css";
import { useTranslation } from "react-i18next";

const Title: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className={styles.title}>Contact</h3>
      <p className={styles.subtitle}>I’m currently available for freelance work</p>
    </>
  );
};

export default Title;
