import React from "react";
import Card from "../components/Card";
import { projects } from "../lib";
import { Project } from "../lib/types";
const R = require("ramda");

const ProjectsSection = () => {
  return (
    <div className="wrapper work" id="work">
      <h1>Projects</h1>
      <div className="category-projects">
        {R.reverse(projects).map(
          (
            {
              title,
              description,
              githubLink,
              websiteLink,
              paragraphColor,
              linkColor,
              backgroundColor,
              hoverLinkColor,
              backgroundImage
            }: Project,
            index: number
          ) => (
            <Card
              key={index}
              id={index}
              title={title}
              description={description}
              githubLink={githubLink}
              websiteLink={websiteLink}
              backgroundColor={backgroundColor}
              paragraphColor={paragraphColor}
              linkColor={linkColor}
              hoverLinkColor={hoverLinkColor}
              backgroundImage={backgroundImage}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
