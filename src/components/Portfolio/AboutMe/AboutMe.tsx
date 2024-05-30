import React from "react";
import Container from "../../Container/Container";

import styles from "./AboutMe.module.css";

import scroll from "/src/assets/scroll.svg";
import aboutMeIMG from "/src/assets/images/about-me/about-me-img.png";

const AboutMe: React.FC = () => {
  return (
    <section className={styles.aboutMe}>
      <Container>
        <div className={styles.aboutMe__inner}>
          <img src={scroll} className={styles.scroll}/>
          <div className={styles.aboutMe__info__wrapper}>
            <div className={styles.aboutMe__info}>
              <h2 className={styles.aboutMe__title}>About Me</h2>
              <div className={styles.aboutMe__info__content}>
                <span className={styles.tags}> &lt;p&gt; </span>
                <div>
                  <h3 className={styles.aboutMe__info__title}>Hello!</h3>
                  <p className={styles.aboutMe__info__text}>
                    My name is Yury and I specialize in web developement that
                    utilizes <span className={styles.color__brand}>HTML</span>,
                    <span className={styles.color__brand}>CSS</span>,
                    <span className={styles.color__brand}>JS</span>, and
                    <span className={styles.color__brand}> REACT</span> etc.
                    <br />
                    <br />
                    I am a highly motivated individual and eternal optimist
                    dedicated to writing clear, concise, robust code that works.
                    Striving to never stop learning and improving.
                    <br />
                    <br /> When I'm not coding, I am writing bolgs, reading, or
                    picking up some new hands-on art project like photography.
                    <br />
                    <br />I like to have my perspective and belief systems
                    challenged so that I see the world through new eyes.
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
