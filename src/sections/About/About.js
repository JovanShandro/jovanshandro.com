import React, { useEffect } from "react";
import gsap from "gsap";
import styles from "./About.module.css";

const AboutSection = () => {
  useEffect(() => {
    gsap.from("[class^='About_star']", {
      scrollTrigger: {
        trigger: "[class^='About_star']",
        toggleActions: "play none none none",
        start: "top 40%",
      },
      opacity: "0",
      width: "0",
      x: "500",
      ease: "bounce",
      duration: 2,
    });
  }, []);

  return (
    <div className={`wrapper ${styles.about}`} id="about">
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.aboutMeInfo}>
        <p className={styles.paragraph}>
          I am a Fullstack Web Developer specialized in developing high-quality
          responsive websites. I have experience working with multiple famous
          frameworks such as React, Vue, Svelte and lately also Angular for the
          Frontend and Node.js for the Backend.
        </p>
        <br />
        <p className={styles.paragraph}>
          If I would have to choose three words to describe myself, they would
          be: reliable, responsible and strong-willed. I am always willing to
          learn and perfect new skills, and able to work well in a team setting
          and in busy environments.
        </p>
        <br />
        <p className={styles.paragraph}>
          Having had the opportunity to work on different projects in a
          relatively short amount of time, I have obtained the skill of quickly
          learning new technologies and being able to apply them right away.
        </p>
        <br />
        <p className={styles.paragraph}>
          Always excited what the future will bring!
        </p>
        <div className={styles.rightCorner}>
          <div className={styles.star}></div>
        </div>
        <div className={styles.leftCorner}>
          <div className={styles.star}></div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.star}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
