import Card from "components/Card";
import React, { useState } from "react";
import { projects } from "./data";
import styles from "./Projects.module.css";

const projectsLabels = Object.keys(projects);

const Dropdown = ({ values, setValue, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectValue = (val) => {
    setValue(val);
    setIsOpen(false);
  };

  const Icon = isOpen ? (
    <i className="fas fa-chevron-up"></i>
  ) : (
    <i className="fas fa-chevron-down"></i>
  );

  return (
    <div className={styles.dropdown}>
      <div className={styles.text} onClick={() => setIsOpen((v) => !v)}>
        {value} {Icon} 
      </div>
      {isOpen && (
        <div className={styles.menu}>
          {values.map((value, index) => (
            <div key={index}>
              <div
                className={styles.dropdownItem}
                onClick={() => selectValue(value)}
              >
                {value}
              </div>
              {index !== values.length - 1 && <hr />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  const [tab, setTab] = useState(projectsLabels[0]);

  return (
    <div className={`wrapper ${styles.projects} `} id="projects">
      <h1>Projects</h1>
      <Dropdown value={tab} setValue={setTab} values={projectsLabels} />
      <div className="category-projects">
        {projects[tab]
          .slice()
          .reverse()
          .map((props, index) => (
            <Card key={index} {...props} />
          ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
