import React, { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

import "./LanguageSwitch.module.css";
import styles from "./LanguageSwitch.module.css";
export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case "en": {
        i18n.changeLanguage("en");
        break;
      }
      case "ru": {
        i18n.changeLanguage("ru");
        break;
      }
    }
  };

  return (
    <div className={styles.container}>
      <select
        className={styles.select__language}
        onChange={handleChange}
        defaultValue={i18n.language}
      >
        <option className={styles.select__option} value="english">
          English
        </option>
        <option className={styles.select__option} value="russian">
          Русский
        </option>
      </select>
    </div>
  );
};
