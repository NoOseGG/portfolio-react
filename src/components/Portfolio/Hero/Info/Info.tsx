import React from "react";

import styles from "./Info.module.css";

const Info: React.FC = () => {
  return (
    <div className={styles.info}>
      <div>
        <span className={styles.tags}> &lt;h1&gt; </span>
        <h2 className={styles.info__title}>
          Hey
          <br />
          I'm <span className={styles.info__name}>Yury</span>,<br />
          Front-End Developer
        </h2>
        <span className={styles.tags}> &lt;/h1&gt; </span>
      </div>

      <div>
        <span className={styles.tags}> &lt;p&gt; </span>
        <p className={styles.info__text}>
          I help business grow by crafting amazing web experiences. If you’re
          looking for a developer that likes to get stuff done,
        </p>
        <span className={styles.tags}> &lt;p&gt; </span>
        <div className={styles.info__send}>
          Let's Talk
          <div className={styles.info__send__icon}>
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
                d="M1.00004 5.98266C0.999882 5.99253 0.999865 6.00239 0.999994 6.01225V18C0.999994 19.6523 2.34771 21 3.99999 21H20C21.6523 21 23 19.6523 23 18V6.01236C23.0001 6.00242 23.0001 5.99247 22.9999 5.98251C22.9905 4.33822 21.6464 3 20 3H3.99999C2.35349 3 1.00943 4.3383 1.00004 5.98266ZM3.10657 5.55395C3.27195 5.22692 3.61203 5 3.99999 5H20C20.388 5 20.728 5.22692 20.8934 5.55395L12 11.7793L3.10657 5.55395ZM21 7.92066V18C21 18.5477 20.5477 19 20 19H3.99999C3.45228 19 2.99999 18.5477 2.99999 18V7.92066L11.4265 13.8192C11.7709 14.0603 12.2291 14.0603 12.5735 13.8192L21 7.92066Z"
                fill="#2D3648"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
