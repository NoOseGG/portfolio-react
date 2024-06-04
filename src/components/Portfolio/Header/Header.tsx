import React from "react";

import styles from "./Header.module.css";

import Container from "../../Container/Container";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";
import { LanguageSwitch } from "./LanguageSwitch/LanguageSwitch";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
          <Logo />
          <div className={styles.search__container}>
            <LanguageSwitch />
            <Search />
          </div>
          <Menu />
          <BurgerMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
