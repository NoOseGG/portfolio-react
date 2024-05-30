import React, { useState } from "react";

import styles from "./Projects.module.css";

import workWeather from "/src/assets/images/works/works-weather.png";
import workRM from "/src/assets/images/works/works-r&m.png";
import workToDo from "/src/assets/images/works/works-todo.png";
import buttonLeft from "/src/assets/images/works/button-l.svg";
import buttonRight from "/src/assets/images/works/button-r.svg";

const projects = [
  {
    name: "Weather APP",
    link: "https://weather-pet-project.netlify.app/",
    image: workWeather,
  },
  {
    name: "Rick & Morty database",
    link: "https://rick-and-morty-pet-project.netlify.app/",
    image: workRM,
  },
  {
    name: "ToDo List",
    link: "https://todos-front-end.netlify.app/",
    image: workToDo,
  },
];

const Projects: React.FC = () => {
  const [count, setCount] = useState(0);

  const prevProject = () => {
    if (count === 0) {
      setCount(projects.length - 1);
      return;
    }
    setCount((prev) => prev - 1);
  };

  const nextProject = () => {
    if (count === projects.length - 1) {
      setCount(0);
      return;
    } else {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <>
      <h3 className={styles.title}>{projects[count].name}</h3>
      <a
        className={styles.link__to__project}
        href={projects[count].link}
        target="_blank"
      >
        View Website
      </a>
      <div className={styles.project}>
        <img
          onClick={prevProject}
          src={buttonLeft}
          alt=""
          className={styles.button}
        />
        <div className={styles.link__to}>
          <img
            src={projects[count].image}
            alt="weather"
            className={styles.project__img}
          />
        </div>
        <img
          onClick={nextProject}
          src={buttonRight}
          alt=""
          className={styles.button}
        />
      </div>
    </>
  );
};

export default Projects;
