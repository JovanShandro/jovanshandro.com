import React from "react";
import { skills, bars } from "../lib";

const SkillsSection: React.FC<{}> = () => {
  return (
    <div className="wrapper skills" id="skills">
      <div className="skills-content">
        <h1>Skills</h1>
        <p className="skills-info">
          My technical skills include:
          {skills.map((skill, i) => (
            <span className="skill" key={i}>
              {skill !== "C" ? skill + "," : skill}
            </span>
          ))}
        </p>
        <p className="skills-info">Out of them, my strongest are:</p>
        {bars.map((bar, i) => (
          <div className="mainSkillContainer" key={i}>
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
