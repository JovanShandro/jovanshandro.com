import React from "react";

const AboutSection = () => {
  return (
    <div className="wrapper about" id="about">
      <h1>About Me</h1>
      <div className="about-me-info">
        <p>
          I am a second year Computer Science student at Jacobs University
          Bremen. I discovered my passion for coding during high school, which
          lead me to dive deep into the programming world.
        </p>
        <p>
          If I would have to choose three words to describe myself, they would
          be: reliable, responsible and strong-willed. I am always willing to
          learn new skills, and able to work in busy environments and also
          within a team setting.
        </p>
        <p>
          Being in the Blockchain Industry for quite some time now, I have
          realised how powerful this technology can be, and want to discover
          even more about it. Other than that, of course I cannot forget to
          mention my love for web and app development using Javascript.
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
