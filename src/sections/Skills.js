import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const skills = [
  "React.js",
  "React Native",
  "Next.js",
  "Material UI",
  "Reactstrap",
  "React Semantic UI",
  "React Bootstrap",
  "Node.js",
  "Express.js",
  "Hapi.dev",
  "REST APIs",
  "Javascript",
  "Typescript",
  "Firebase Auth and Datastore",
  "MongoDb",
  "PostgreSQL",
  "Pouchdb",
  "HTML",
  "CSS",
  "Vue.js",
  "Svelte",
  "GraphQL",
  "Solidity",
  "Ionic",
];

const barWidths = ["96%", "92%", "91%", "80%"];
const bars = ["React", "Node.js", "Javascript", "React Native"];

const SkillsSection = () => {
  const ref = useRef(null);
  const refs = useRef([]);

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementsByClassName("mainSkills"),
        toggleActions: "play none none none",
        start: "top 60%",
      },
    });
    refs.current.forEach((element, index) => {
      tl.fromTo(
        element.childNodes[0],
        { width: 0 },
        {
          width: barWidths[index],
          ease: "bounce",
          duration: 0.5,
        }
      );
    });
  }, []);

  return (
    <div className="wrapper skills" id="skills">
      <div className="skills-content">
        <h1>Skills</h1>
        <p className="skills-info">
          My technical skills include:
          {skills.map((skill, i) => (
            <span className="skill" key={i}>
              {skill !== "Algorithms" ? skill + "," : skill}
            </span>
          ))}
        </p>
        <p className="skills-info">Out of them, my strongest are:</p>
        <div ref={ref} className="mainSkills">
          {bars.map((name, i) => (
            <div className="mainSkillContainer" key={i}>
              <div className="tag">
                <p>{name}</p>
              </div>
              <div className="progressbar" ref={addToRefs}>
                <div className="bar"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SkillsSection;
