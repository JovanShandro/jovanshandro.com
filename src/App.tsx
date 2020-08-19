import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainSection from "./sections/Main";
import AboutSection from "./sections/About";
import SkillsSection from "./sections/Skills";
import ProjectsSection from "./sections/Projects";
import ContactsSection from "./sections/Contacts";
import VideoCard from "./components/VideoCard";

function App() {
  return (
    <React.Fragment>
      <VideoCard src="/img/blogapp.mov" />
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
