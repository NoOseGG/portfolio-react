import React from "react";

import styles from "./Highlights.module.css";
import { useTranslation } from "react-i18next";

const Highlights: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.highlights}>
      <div className={styles.highlights__item}>
        <span>2</span>
        <div>{t('hero-highlights-language')}</div>
      </div>

      <div className={styles.highlights__item}>
        <span>9</span>
        <div>{t('hero-highlights-tools')}</div>
      </div>

      <div className={styles.highlights__item}>
        <span>2</span>
        <div>{t('hero-highlights-experience')}</div>
      </div>
    </div>
  );
};

export default Highlights;
