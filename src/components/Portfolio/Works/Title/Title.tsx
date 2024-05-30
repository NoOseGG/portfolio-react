import React from "react";

import styles from "./Title.module.css";

const Title: React.FC = () => {
  return (
    <>
      <h3 className={styles.works__title}>Works</h3>
      <p className={styles.works__subtitle}>
        I had the pleasure of working with these awesome projects
      </p>
    </>
  );
};

export default Title;
