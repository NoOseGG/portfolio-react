import React from "react";

import styles from "./Highlights.module.css";

import html from "../../../../assets/icons/highlights/icon-html.svg";
import css from "../../../../assets/icons/highlights/icon-css.svg";
import js from "../../../../assets/icons/highlights/icon-js.svg";
import react from "../../../../assets/icons/highlights/icon-react.svg";

const Highlights: React.FC = () => {
  return (
    <ul className={styles.highlights}>
      <li className={styles.highlights__item}>
        <img src={html} alt="" className={styles.highlights__item__icon} />
        <span className={styles.hightlights__html}>HTML</span>
      </li>
      <li className={styles.highlights__item}>
        <img src={css} alt="" className={styles.highlights__item__icon} />
        <span className={styles.hightlights__css}>CSS</span>
      </li>
      <li className={styles.highlights__item}>
        <img src={js} alt="" className={styles.highlights__item__icon} />
        <span className={styles.hightlights__js}>JS</span>
      </li>
      <li className={styles.highlights__item}>
        <img src={react} alt="" className={styles.highlights__item__icon} />
        <span className={styles.hightlights__react}>REACT</span>
      </li>
    </ul>
  );
};

export default Highlights;
