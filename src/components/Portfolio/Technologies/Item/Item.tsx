import React from "react";

import styles from "./Item.module.css";

type ItemProps = {
  title: string;
  icon: string;
  link: string;
};

const Item: React.FC<ItemProps> = ({ title, icon, link }) => {
  return (
    <a href={link} target="_blank" className={styles.container}>
      <img src={icon} alt="" className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
    </a>
  );
};

export default Item;
