import React from "react";

import styles from "./Highlights.module.css";

const Highlights: React.FC = () => {
  return (
    <div className={styles.highlights}>
      <div className={styles.highlights__item}>
        <span>2</span>
        <div>Programming Language</div>
      </div>

      <div className={styles.highlights__item}>
        <span>6</span>
        <div>Development Tools</div>
      </div>

      <div className={styles.highlights__item}>
        <span>1</span>
        <div>Year of experience</div>
      </div>
    </div>
  );
};

export default Highlights;
