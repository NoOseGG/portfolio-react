import React from "react";

import styles from "./Logo.module.css";

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.icon}>&lt;JS/&gt;</div>
      <div className={styles.title}>YurySvirydzenka</div>
    </div>
  );
};

export default Logo;
