import React from "react";
import Navbar from "./sections/Navbar";
import MainSection from "./sections/Main";
import AboutSection from "./sections/About";
import SkillsSection from "./sections/Skills";
import ProjectsSection from "./sections/Projects";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </React.Fragment>
  );
}

export default App;
