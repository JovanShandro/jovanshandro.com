import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="wrapper about" id="about">
      <h1>About Me</h1>
      <div className="about-me-info">
        <p>
          I am a Computer Science graduate from Jacobs University Bremen. I
          discovered my passion for coding during high school, which lead me to
          dive deep into the programming world.
        </p>
        <p>
          If I would have to choose three words to describe myself, they would
          be: reliable, responsible and strong-willed. I am always willing to
          learn new skills, and able to work in busy environments and also
          within a team setting.
        </p>
        <p>
          Having had the opportunity to work on different projects with many
          technologies in a relatively short amount of time, I have obtained a
          &nbsp;<em>'You can build anything if you want!'</em> mentality. I have
          worked on web based projects with different famous frameworks such as
          React, Vue and Svelte, on decentralized applications using the
          Ethereum and Tezos Blockchains (the latter regarding NFT minting), and
          also with Self-Sovereign Identity (SSI).
        </p>
        <br />
        <p>Always excited what the future will bring!</p>
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
