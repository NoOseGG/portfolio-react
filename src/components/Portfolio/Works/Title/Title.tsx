import React from "react";

import styles from "./Title.module.css";
import { useTranslation } from "react-i18next";

const Title: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className={styles.works__title}>{t('works-title')}</h3>
      <p className={styles.works__subtitle}>{t('works-subtitle')}</p>
    </>
  );
};

export default Title;
