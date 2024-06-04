import React from "react";

import styles from "./BurgerMenu.module.css";

const BurgerMenu: React.FC = () => {
  return (
    <div className={styles.burger__btn}>
      <span className={styles.burger__line}></span>
      <span className={styles.burger__line}></span>
      <span className={styles.burger__line}></span>
    </div>
  );
};

export default BurgerMenu;
