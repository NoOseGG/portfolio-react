import React from "react";

import styles from "./Projects.module.css";

import workWeather from "/src/assets/images/works/works-weather.png";
import buttonLeft from "/src/assets/images/works/button-l.svg";
import buttonRight from "/src/assets/images/works/button-r.svg";

const Projects: React.FC = () => {
  return (
    <div className={styles.project}>
      <img src={buttonLeft} alt="" className={styles.button} />
      <div className={styles.link__to}>
        <img src={workWeather} alt="weather" className={styles.project__img} />
        
      </div>
      <img src={buttonRight} alt="" className={styles.button} />
    </div>
  );
};

export default Projects;
