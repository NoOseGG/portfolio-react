import React from "react";

import styles from "./Contacts.module.css";

import Container from "../../Container/Container";
import scroll from "/src/assets/scroll.svg";
import Title from "./Title/Title";
import { useTranslation } from "react-i18next";

const Contacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.contacts}>
      <Container>
        <div className={styles.contacts__inner}>
          <img src={scroll} className={styles.scroll} />
          <Title />
          <div className={styles.contacts__send__title}>
            {t("contact-send-title")}
          </div>
          <form className={styles.contacts__form}>
            <div className={styles.input__container}>
              <div className={styles.input__wrapper}>
                <label htmlFor="name" className={styles.label}>
                  {t("contact-form-name")}
                </label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className={styles.input__name}
                  placeholder={t("contact-form-name")}
                />
              </div>

              <div className={styles.input__wrapper}>
                <label htmlFor="email" className={styles.label}>
                  {t("contact-form-email")}
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  className={styles.input__email}
                  placeholder={t("contact-form-email")}
                />
              </div>
            </div>
            <div className={styles.input__wrapper}>
              <label htmlFor="email" className={styles.label}>
                {t("contact-form-message")}
              </label>
              <input
                name="message"
                id="message"
                type="text"
                className={styles.input__message}
                placeholder={t("contact-form-message")}
              />
            </div>
            <button type="submit" className={styles.send__btn}>
              {t("contact-form-send")}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.7071 1.29292C22.9306 1.5164 23.0262 1.81935 22.9939 2.11081C22.9848 2.19252 22.9657 2.27332 22.9366 2.35121L15.9439 22.3304C15.8084 22.7174 15.4504 22.9825 15.0408 22.9992C14.6311 23.0159 14.2527 22.7808 14.0862 22.4062L10.2424 13.7576L1.59387 9.91384C1.21919 9.74731 0.984122 9.36894 1.00084 8.95926C1.01755 8.54959 1.28265 8.19162 1.66965 8.05617L21.6488 1.06348C21.7272 1.03414 21.8085 1.01497 21.8907 1.00598C21.9511 0.999338 22.0117 0.998262 22.0717 1.00259C22.3032 1.01913 22.5301 1.11591 22.7071 1.29292ZM18.1943 4.3915L4.71108 9.11063L10.7785 11.8073L18.1943 4.3915ZM12.1928 13.2215L19.6085 5.80571L14.8894 19.289L12.1928 13.2215Z"
                  fill="#292F36"
                />
              </svg>
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
