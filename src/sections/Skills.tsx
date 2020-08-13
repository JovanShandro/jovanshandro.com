import React from "react";

const SkillsSection: React.FC<{}> = () => {
  const skills = [
    "Solidity",
    "Ethereum",
    "HTML",
    "CSS",
    "Javascript",
    "Vue.js",
    "Node.js",
    "React.js",
    "React Native",
    "Firebase",
    "Pouchdb",
    "MongoDb",
    "Algorithms",
    "C++",
    "C",
    "Java",
    "Python",
    "SQL"
  ];

  const bars = [
    {
      name: "Vue.js",
      width: "92%"
    },
    {
      name: "Javascript",
      width: "91%"
    },
    {
      name: "React",
      width: "94%"
    },
    {
      name: "React Native",
      width: "96%"
    }
  ];

  return (
    <div className="wrapper skills" id="skills">
      <div className="skills-content">
        <h1>Skills</h1>
        <p className="skills-info">
          My technical skills include:
          {skills.map(skill => (
            <span className="skill">
              {skill !== "SQL" ? skill + "," : skill}
            </span>
          ))}
        </p>
        <p className="skills-info">Out of them, my strongest are:</p>
        {bars.map(bar => (
          <div className="mainSkillContainer">
            <div className="tag">
              <p>{bar.name}</p>
            </div>
            <div className="progressbar">
              <div style={{ width: bar.width }} className="bar"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkillsSection;
