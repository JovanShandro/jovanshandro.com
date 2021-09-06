import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./IntroAnimation.module.css";

const IntroAnimation = () => {
  const refs = useRef([]);

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    refs.current.forEach((element, index) => {
      gsap.to(
        element,
        {
          width: 0,
          duration: 0.4 * index,
        },
        0.1 * index
      );
    });
  }, []);

  return (
    <div className={styles.introAnimation}>
      <div className={styles.relative}>
        {Array.from(Array(16), (_, i) => i).map((index) => {
          return (
            <div
              ref={addToRefs}
              key={index}
              className={styles.box}
              style={{
                position: "fixed",
                top: `${index * 22 - 20}%`,
                width: `${index * 300}px`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default IntroAnimation;
