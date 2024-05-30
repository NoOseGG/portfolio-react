import React from "react";

import styles from "./Title.module.css";

const Title: React.FC = () => {
  return (
    <>
      <h3 className={styles.title}>Skills</h3>
      <p className={styles.subtitle}>
        I am striving to never stop learning and improving
      </p>
    </>
  );
};

export default Title;
