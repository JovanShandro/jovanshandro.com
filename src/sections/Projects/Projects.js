import Card from "components/Card";
import React, { useState } from "react";
import { projects } from "./data";
import styles from "./Projects.module.css";

const projectsLabels = Object.keys(projects);

const ProjectsSection = () => {
  const [tab, setTab] = useState(projectsLabels[0]);

  return (
    <div className={`wrapper ${styles.projects} `} id="projects">
      <h1>Projects</h1>
      <div className={styles.tabs}>
        {projectsLabels.map((label) => (
          <button key={label} onClick={() => setTab(label)}>
            {label}
          </button>
        ))}
      </div>
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
