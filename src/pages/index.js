import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import React from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import IntroAnimation from "components/IntroAnimation";
import VideoCard from "components/VideoCard";
import AboutSection from "sections/About";
import ContactsSection from "sections/Contacts";
import MainSection from "sections/Main";
import ProjectsSection from "sections/Projects";
import SkillsSection from "sections/Skills";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="I am a highly motivated Blockchain and Web developer. I use Javascript to build web/desktop/mobile applications."
        />
        <meta
          name="keywords"
          content="blockchain, javascript, web, developer, student, computer science, programming"
        />
        <title>Jovan Shandro</title>
      </Head>

      <VideoCard id="sorting" src="/videos/sorting.webm" />
      <VideoCard id="blog" src="/videos/blogapp.webm" />
      <VideoCard id="rest_blog" src="/videos/rest_blog.webm" />
      <VideoCard id="yelpcamp" src="/videos/yelpcamp.webm" />
      <VideoCard id="quasartodo" src="/videos/quasartodo.webm" />
      <VideoCard id="travel_log" src="/videos/travel_log.webm" />

      <IntroAnimation />
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
