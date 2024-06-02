import React from "react";
import Container from "../../Container/Container";

import styles from "./AboutMe.module.css";

import scroll from "/src/assets/scroll.svg";
import aboutMeIMG from "/src/assets/images/about-me/about-me-img.png";
import { useTranslation } from "react-i18next";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutMe}>
      <Container>
        <div className={styles.aboutMe__inner}>
          <img src={scroll} className={styles.scroll} />
          <div className={styles.aboutMe__info__wrapper}>
            <div className={styles.aboutMe__info}>
              <h2 className={styles.aboutMe__title}>{t('about-title')}</h2>
              <div className={styles.aboutMe__info__content}>
                <span className={styles.tags}> &lt;p&gt; </span>
                <div>
                  <h3 className={styles.aboutMe__info__title}>{t('about-info-title')}</h3>
                  <p className={styles.aboutMe__info__text}>
                    {t('about-info-p1')} <span className={styles.color__brand}>{t('html')}</span>,
                    <span className={styles.color__brand}>{t('css')}</span>,
                    <span className={styles.color__brand}>{t('js')}</span>, {t('and')}
                    <span className={styles.color__brand}> {t('react')}</span> {t('etc')}
                    <br />
                    <br />
                    {t('about-info-p2')}
                    <br />
                    <br />
                    {t('about-info-p3')}
                    <br />
                    <br />
                    {t('about-info-p4')}
                  </p>
                </div>
                <span className={styles.tags}> &lt;/p&gt; </span>
              </div>
            </div>
            <div className={styles.aboutMe__img}>
              <img src={aboutMeIMG} alt="about-me" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
