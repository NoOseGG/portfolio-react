import React from "react";

import styles from "./SelectLanguage.module.css";
import { useTranslation } from "react-i18next";

const SelectLanguage: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case "english": {
        i18n.changeLanguage("en");
        break;
      }
      case "russian": {
        i18n.changeLanguage("ru");
        break;
      }
    }
  };

  return (
    <select className={styles.select__language} onClick={handleChange}>
      <option value="english">English</option>
      <option value="russian">Русский</option>
    </select>
  );
};

export default SelectLanguage;
