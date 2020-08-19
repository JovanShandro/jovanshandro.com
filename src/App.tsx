import React from "react";
import Navbar from "./sections/Navbar";
import Footer from "./components/Footer";
import MainSection from "./sections/Main";
import AboutSection from "./sections/About";
import SkillsSection from "./sections/Skills";
import ProjectsSection from "./sections/Projects";
import ContactsSection from "./sections/Contacts";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactsSection />
      <Footer />
    </React.Fragment>
  );
}

export default App;
