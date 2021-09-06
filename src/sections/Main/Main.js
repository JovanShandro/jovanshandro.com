import React from "react";
import styles from "./Main.module.css";

const MainSection = () => {
  return (
    <div className={`wrapper ${styles.mainInfoSection} `}>
      <div className={styles.text}>
        <h1 id={styles.mainTitle}>
          <span className={styles.word}>
            <span>W</span>
            <span className={styles.mLeft}>e</span>
            <span className={styles.mLeft}>l</span>
            <span className={styles.mLeft}>c</span>
            <span className={styles.mLeft}>o</span>
            <span className={styles.mLeft}>m</span>
            <span className={styles.mLeft}>e</span>
            <span className={styles.mLeft}>,</span>
          </span>
          <br />
          <span className={styles.word}>
            <span>I</span>
          </span>
          <div className={styles.word}>
            <span>a</span>
            <span className={styles.mLeft}>m</span>
          </div>
          <span className={styles.word}>
            <span className={styles.name}>J</span>
            <span className={`${styles.mLeft} ${styles.name}`}>o</span>
            <span className={`${styles.mLeft} ${styles.name}`}>v</span>
            <span className={`${styles.mLeft} ${styles.name}`}>a</span>
            <span className={`${styles.mLeft} ${styles.name}`}>n</span>
          </span>
          <span className={styles.word}>
            <span className={styles.name}>S</span>
            <span className={`${styles.mLeft} ${styles.name}`}>h</span>
            <span className={`${styles.mLeft} ${styles.name}`}>a</span>
            <span className={`${styles.mLeft} ${styles.name}`}>n</span>
            <span className={`${styles.mLeft} ${styles.name}`}>d</span>
            <span className={`${styles.mLeft} ${styles.name}`}>r</span>
            <span className={`${styles.mLeft} ${styles.name}`}>o</span>
            <span className={styles.mLeft}>,</span>
          </span>
          <br />
          <span className={styles.word}>
            <span>W</span>
            <span className={styles.mLeft}>e</span>
            <span className={styles.mLeft}>b</span>
            <span className={styles.mLeft}>,</span>
          </span>
          <span className={styles.word}>
            <span>M</span>
            <span className={styles.mLeft}>o</span>
            <span className={styles.mLeft}>b</span>
            <span className={styles.mLeft}>i</span>
            <span className={styles.mLeft}>l</span>
            <span className={styles.mLeft}>e</span>
            <span className={styles.mLeft}>,</span>
          </span>
          <span className={styles.word}>
            <span>a</span>
            <span className={styles.mLeft}>n</span>
            <span className={styles.mLeft}>d</span>
          </span>
          <span className={styles.word}>
            <span>B</span>
            <span className={styles.mLeft}>l</span>
            <span className={styles.mLeft}>o</span>
            <span className={styles.mLeft}>c</span>
            <span className={styles.mLeft}>k</span>
            <span className={styles.mLeft}>c</span>
            <span className={styles.mLeft}>h</span>
            <span className={styles.mLeft}>a</span>
            <span className={styles.mLeft}>i</span>
            <span className={styles.mLeft}>n</span>
          </span>
          <br />
          <span className={styles.word}>
            <span>D</span>
            <span className={styles.mLeft}>e</span>
            <span className={styles.mLeft}>v</span>
            <span className={styles.mLeft}>e</span>
            <span className={styles.mLeft}>l</span>
            <span className={styles.mLeft}>o</span>
            <span className={styles.mLeft}>p</span>
            <span className={styles.mLeft}>e</span>
            <span className={styles.mLeft}>r</span>
          </span>
        </h1>
        <p></p>
        <div className={styles.buttons}>
          <a className={`mt-s ${styles.button}`} href="pdf/cv.pdf" download>
            Download CV
          </a>
          <a className={`mt-s ${styles.button}`} href="#contact">
            contact me
          </a>
        </div>
      </div>
      <div className={styles.profileImage}>
        <img src="img/code.svg" alt="" />
      </div>
    </div>
  );
};

export default MainSection;
