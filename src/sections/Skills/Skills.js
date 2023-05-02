import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import styles from "./Skills.module.css";

const skills = [
  "Angular",
  "React",
  "Next.js",
  "Vue",
  "React Native",
  "Svelte",
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "Node.js",
  "Express.js",
  "Hapi.dev",
  "REST APIs",
  "GraphQL",
  "Material UI",
  "Reactstrap",
  "React Semantic UI",
  "React Bootstrap",
  "MongoDb",
  "PostgreSQL",
  "Pouchdb",
];

const barWidths = ["96%", "90%", "89%", "80%"];
const bars = ["Angular", "React", "Vue", "Node.js"];

const SkillsSection = () => {
  const ref = useRef(null);
  const refs = useRef([]);

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    refs.current.forEach((element, index) => {
      gsap.fromTo(
        element.childNodes[0],
        { width: 0 },
        {
          width: barWidths[index],
          ease: "power2",
          duration: 1,
          scrollTrigger: {
            trigger: document.getElementsByClassName("mainSkills"),
            toggleActions: "play none none none",
            start: "top 60%",
          },
        }
      );
    });
  }, []);

  return (
    <div className={`wrapper ${styles.skills} `} id="skills">
      <div className={styles.skillsContent}>
        <h1 className={styles.title}>Skills</h1>
        <p className={styles.skillsInfo}>
          My technical skills include:
          {skills.map((skill, i) => (
            <span className={styles.skill} key={i}>
              {skill !== "Algorithms" ? skill + "," : skill}
            </span>
          ))}
        </p>
        <p className={styles.skillsInfo}>Out of them, my strongest are:</p>
        <div ref={ref} className="mainSkills">
          {bars.map((name, i) => (
            <div className={styles.mainSkillContainer} key={i}>
              <div className={styles.tag}>
                <p>{name}</p>
              </div>
              <div className={styles.progressbar} ref={addToRefs}>
                <div className={styles.bar}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SkillsSection;
