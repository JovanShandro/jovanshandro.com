import React from "react";
import VideoCard from "../components/VideoCard";
import Navbar from "../components/Navbar";
import MainSection from "../sections/Main";
import AboutSection from "../sections/About";
import SkillsSection from "../sections/Skills";
import ProjectsSection from "../sections/Projects";
import ContactsSection from "../sections/Contacts";
import Footer from "../components/Footer";
import Head from "next/head";

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
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
          crossOrigin="anonymous"
        />
        <title>Jovan Shandro</title>
      </Head>

      <VideoCard id="sorting" src="/img/sorting.mov" />
      <VideoCard id="blog" src="/img/blogapp.mov" />
      <VideoCard id="rest_blog" src="/img/rest_blog.mp4" />
      <VideoCard id="yelpcamp" src="/img/yelpcamp.mp4" />
      <VideoCard id="quasartodo" src="/img/quasartodo.mp4" />
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
