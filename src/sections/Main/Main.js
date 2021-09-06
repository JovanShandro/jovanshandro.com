import React from "react";
import styles from "./Main.module.css";

const displayWord = (word, isName = false) => (
  <span key={word} className={styles.word}>
    {Array.from(word).map((letter, index) =>
      index === 0 ? (
        <span key={word + index} className={isName ? styles.name : ""}>
          {letter}
        </span>
      ) : (
        <span
          key={word + index}
          className={isName ? `${styles.mLeft} ${styles.name}` : styles.mLeft}
        >
          {letter}
        </span>
      )
    )}
  </span>
);

const content = [
  "Welcome,",
  "",
  "I",
  "am",
  "Jovan",
  "Shandro",
  "",
  "Web,",
  "Mobile,",
  "and",
  "Blockchain",
  "",
  "Developer",
];

const MainSection = () => {
  return (
    <div className={`wrapper ${styles.mainInfoSection} `}>
      <div className={styles.text}>
        <h1 id={styles.mainTitle}>
          {content.map((word, index) => {
            if (word === "") return <br key={index} />;
            return displayWord(word, ["Jovan", "Shandro"].includes(word));
          })}
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
