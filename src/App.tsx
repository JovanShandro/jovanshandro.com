import React from "react";
import MainSection from "./sections/Main";
import Navbar from "./sections/Navbar";
import AboutSection from "./sections/About";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <MainSection />
      <AboutSection />
    </React.Fragment>
  );
}

export default App;
