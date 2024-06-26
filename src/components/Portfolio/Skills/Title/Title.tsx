import React from "react";

import styles from "./Title.module.css";
import { useTranslation } from "react-i18next";

const Title: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className={styles.title}>{t("skills-title")}</h3>
      <p className={styles.subtitle}>{t("skills-subtitle")}</p>
    </>
  );
};

export default Title;
