import React from "react";

import styles from "./Service.module.css";

const Service: React.FC = () => {
  return (
    <div className={styles.service}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_33_425)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.3333 24.0001H26.6667C28.8758 24.0001 30.6667 22.2092 30.6667 20.0001V6.66675C30.6667 4.45761 28.8758 2.66675 26.6667 2.66675H5.33334C3.1242 2.66675 1.33334 4.45761 1.33334 6.66675V20.0001C1.33334 22.2092 3.1242 24.0001 5.33334 24.0001H14.6667V26.6667H10.6667C9.9303 26.6667 9.33334 27.2637 9.33334 28.0001C9.33334 28.7365 9.9303 29.3334 10.6667 29.3334H21.3333C22.0697 29.3334 22.6667 28.7365 22.6667 28.0001C22.6667 27.2637 22.0697 26.6667 21.3333 26.6667H17.3333V24.0001ZM5.33334 5.33341C4.59696 5.33341 4.00001 5.93037 4.00001 6.66675V20.0001C4.00001 20.7365 4.59696 21.3334 5.33334 21.3334H26.6667C27.4031 21.3334 28 20.7365 28 20.0001V6.66675C28 5.93037 27.4031 5.33341 26.6667 5.33341H5.33334Z"
            fill="#292F36"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_425">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.service__name}>Web Developement</div>
      <div className={styles.service__highlights}>HTML·CSS·JS·REACT</div>
    </div>
  );
};

export default Service;
