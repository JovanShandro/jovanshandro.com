import React, {useState} from "react";
import Card from "../components/Card";
import { projects } from "../lib";
import { Project } from "../lib/types";
const R = require("ramda");

const projectsLabels = Object.keys(projects)

const ProjectsSection = () => {
  const [tab, setTab] = useState(projectsLabels[0]);

  return (
    <div className="wrapper work" id="work">
      <h1>Projects</h1>
      <div className="tabs">
        {projectsLabels.map(label => (
          <button key={label} onClick={() => setTab(label)}>{label}</button>
        )) }
      </div>
      <div className="category-projects">
        {R.reverse(projects[tab]).map((props: Project, index: number) => (
          <Card key={index} id={index} {...props} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
