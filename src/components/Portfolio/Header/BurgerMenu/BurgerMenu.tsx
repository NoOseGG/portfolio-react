import React, { useEffect, useRef, useState } from "react";

import styles from "./BurgerMenu.module.css";

import Socials from "./Socials/Socials";
import SelectLanguage from "./SelectLanguage/SelectLanguage";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !btnRef.current?.contains(event.target as Node) &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.burger__btn} onClick={handleClick} ref={btnRef}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      {isOpen && (
        <div className={styles.burger__menu} ref={menuRef}>
          <Socials />
          <SelectLanguage />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
