import React, { useState } from "react";

import styles from "./BurgerMenu.module.css";

import Socials from "./Socials/Socials";
import SelectLanguage from "./SelectLanguage/SelectLanguage";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.burger__btn} onClick={handleClick}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      {isOpen && (
        <div className={styles.burger__menu}>
          <Socials />
          <SelectLanguage />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
