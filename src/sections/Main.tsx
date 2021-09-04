import React from "react";

const MainSection = () => {
  return (
    <div className="wrapper main-info-section">
      <div className="text">
        <h1 id="main-h1">
          <span className="word">
            <span>W</span>
            <span className="m-left">e</span>
            <span className="m-left">l</span>
            <span className="m-left">c</span>
            <span className="m-left">o</span>
            <span className="m-left">m</span>
            <span className="m-left">e</span>
            <span className="m-left">,</span>
          </span>
          <br />
          <span className="word">
            <span>I</span>
          </span>
          <div className="word">
            <span>a</span>
            <span className="m-left">m</span>
          </div>
          <span className="word">
            <span className="name">J</span>
            <span className="m-left name">o</span>
            <span className="m-left name">v</span>
            <span className="m-left name">a</span>
            <span className="m-left name">n</span>
          </span>
          <span className="word">
            <span className="name">S</span>
            <span className="m-left name">h</span>
            <span className="m-left name">a</span>
            <span className="m-left name">n</span>
            <span className="m-left name">d</span>
            <span className="m-left name">r</span>
            <span className="m-left name">o</span>
            <span className="m-left">,</span>
          </span>
          <br />
          <span className="word">
            <span>W</span>
            <span className="m-left">e</span>
            <span className="m-left">b</span>
            <span className="m-left">,</span>
          </span>
          <span className="word">
            <span>M</span>
            <span className="m-left">o</span>
            <span className="m-left">b</span>
            <span className="m-left">i</span>
            <span className="m-left">l</span>
            <span className="m-left">e</span>
            <span className="m-left">,</span>
          </span>
          <span className="word">
            <span>a</span>
            <span className="m-left">n</span>
            <span className="m-left">d</span>
          </span>
          <span className="word">
            <span>B</span>
            <span className="m-left ">l</span>
            <span className="m-left ">o</span>
            <span className="m-left ">c</span>
            <span className="m-left ">k</span>
            <span className="m-left ">c</span>
            <span className="m-left ">h</span>
            <span className="m-left ">a</span>
            <span className="m-left ">i</span>
            <span className="m-left ">n</span>
          </span>
          <br />
          <span className="word">
            <span>D</span>
            <span className="m-left">e</span>
            <span className="m-left">v</span>
            <span className="m-left">e</span>
            <span className="m-left">l</span>
            <span className="m-left">o</span>
            <span className="m-left">p</span>
            <span className="m-left">e</span>
            <span className="m-left">r</span>
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
        <img src="img/code.svg" alt="" />
      </div>
    </div>
  );
};

export default MainSection;
