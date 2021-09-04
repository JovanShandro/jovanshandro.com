import React, { useEffect } from "react";
import gsap from "gsap";

const AboutSection: React.FC = () => {
  useEffect(() => {
    gsap.from(".star", {
      scrollTrigger: {
        trigger: ".star",
        toggleActions: "play none none none",
        start: "top 40%",
      },
      opacity: "0",
      width: "0",
      x: "500",
      ease: "bounce",
      duration: 2,
    });
  }, []);

  return (
    <div className="wrapper about" id="about">
      <h1>About Me</h1>
      <div className="about-me-info">
        <p>
          I am a software developer who develops high-quality responsive
          websites and cross-platform mobile applications (for both Android and
          iOS).
        </p>
        <br />
        <p>
          If I would have to choose three words to describe myself, they would
          be: reliable, responsible and strong-willed. I am always willing to
          learn new skills, and able to work in busy environments and also
          within a team setting.
        </p>
        <br />
        <p>
          Having had the opportunity to work on different projects in a
          relatively short amount of time, I have obtained the skill of quickly
          learning new technologies and being able to apply them right away.
        </p>
        <br />
        <p>
          I have worked on web based projects with different famous frameworks
          such as React, Vue and Svelte, on decentralized applications using the
          Ethereum and Tezos Blockchains (the latter regarding NFT minting), and
          also with Self-Sovereign Identity (SSI).
        </p>
        <br />
        <p>
          Always excited what the future will bring! Please contact me if you
          think we can work together!
        </p>
        <div className="right-corner">
          <div className="star"></div>
        </div>
        <div className="left-corner">
          <div className="star"></div>
        </div>
        <div className="bottom">
          <div className="star"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
