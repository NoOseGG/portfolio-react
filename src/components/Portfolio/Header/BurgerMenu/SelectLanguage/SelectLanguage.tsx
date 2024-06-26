import React, { ChangeEvent } from "react";

import styles from "./SelectLanguage.module.css";
import { useTranslation } from "react-i18next";

const SelectLanguage: React.FC = () => {
  const { t, i18n } = useTranslation();

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
    <select
      className={styles.select__language}
      onChange={handleChange}
      defaultValue={i18n.language}
    >
      <option value="en">{t("english")}</option>
      <option value="ru">{t("russian")}</option>
    </select>
  );
};

export default SelectLanguage;
