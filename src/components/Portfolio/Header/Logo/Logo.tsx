import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Logo.module.css";

const Logo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.logo}>
      <div className={styles.icon}>&lt;JS/&gt;</div>
      <div className={styles.title}>{t('header-title')}</div>
    </div>
  );
};

export default Logo;
