import React from "react";

const MainSection = () => {
  return (
    <div className="wrapper main-info-section">
      <div className="text">
        <h1 id="main-h1">
          <span className="word">
            <span className="orbit">W</span>
            <span className="m-left inverse-orbit">e</span>
            <span className="m-left orbit">l</span>
            <span className="m-left inverse-orbit">c</span>
            <span className="m-left orbit">o</span>
            <span className="m-left inverse-orbit">m</span>
            <span className="m-left orbit">e</span>
            <span className="m-left inverse-orbit">,</span>
          </span>
          <br />
          <span className="word">
            <span className="orbit">I</span>
          </span>
          <div className="word">
            <span className="inverse-orbit">a</span>
            <span className="m-left orbit">m</span>
          </div>
          <span className="word">
            <span className="name inverse-orbit">J</span>
            <span className="m-left name orbit">o</span>
            <span className="m-left name inverse-orbit">v</span>
            <span className="m-left name orbit">a</span>
            <span className="m-left name inverse-orbit">n</span>
          </span>
          <span className="word">
            <span className="name orbit">S</span>
            <span className="m-left name inverse-orbit">h</span>
            <span className="m-left name orbit">a</span>
            <span className="m-left name inverse-orbit">n</span>
            <span className="m-left name orbit">d</span>
            <span className="m-left name inverse-orbit">r</span>
            <span className="m-left name orbit">o</span>
            <span className="m-left inverse-orbit">,</span>
          </span>
          <br />
          <span className="word">
            <span className="orbit">B</span>
            <span className="m-left inverse-orbit ">l</span>
            <span className="m-left orbit">o</span>
            <span className="m-left inverse-orbit">c</span>
            <span className="m-left orbit">k</span>
            <span className="m-left inverse-orbit">c</span>
            <span className="m-left orbit">h</span>
            <span className="m-left inverse-orbit">a</span>
            <span className="m-left orbit">i</span>
            <span className="m-left inverse-orbit">n</span>
          </span>
          <span className="word">
            <span className=" orbit">A</span>
            <span className="m-left inverse-orbit">n</span>
            <span className="m-left orbit">d</span>
          </span>
          <span className="word">
            <span className="inverse-orbit">W</span>
            <span className="m-left orbit">e</span>
            <span className="m-left inverse-orbit">b</span>
          </span>
          <span className="word">
            <span className="orbit">D</span>
            <span className="m-left inverse-orbit">e</span>
            <span className="m-left orbit">v</span>
            <span className="m-left inverse-orbit">e</span>
            <span className="m-left orbit">l</span>
            <span className="m-left inverse-orbit">o</span>
            <span className="m-left orbit">p</span>
            <span className="m-left inverse-orbit">e</span>
            <span className="m-left orbit">r</span>
          </span>
        </h1>
        <p></p>
        <div className="buttons">
          <a className="mt-s" href="pdf/cv.pdf" download>
            Download CV
          </a>
          <a className="mt-s" href="#contact">
            contact me
          </a>
        </div>
      </div>
      <div className="profile-image">
        <img src="img/profile.webp" alt="" />
      </div>
    </div>
  );
};

export default MainSection;
