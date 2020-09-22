import React from "react";
import ReactGa from "react-ga";

const ContactsSection = () => {
  const openTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="wrapper contact" id="contact">
      <h1>Contact</h1>
      <div className="icon-wrapper">
        <div
          className="circle"
          onClick={() => {
            openTab("https://www.linkedin.com/in/jovan-shandro-8694a7158");
            ReactGa.event({
              category: "Contact",
              action: "Opened linkedin"
            });
          }}
        >
          <i className="fab fa-linkedin-in"></i>
        </div>
        <div
          className="circle"
          onClick={() => {
            openTab("https://www.facebook.com/shandrojovan");
            ReactGa.event({
              category: "Contact",
              action: "Opened facebook"
            });
          }}
        >
          <i className="fab fa-facebook-f"></i>
        </div>
        <div
          className="circle"
          onClick={() => {
            openTab("https://www.instagram.com/jovanshandro/");
            ReactGa.event({
              category: "Contact",
              action: "Opened instagram"
            });
          }}
        >
          <i className="fab fa-instagram"></i>
        </div>
        <div
          className="circle"
          onClick={() => {
            window.open("mailto:shandrojovan@gmail.com");
            ReactGa.event({
              category: "Contact",
              action: "Opened email"
            });
          }}
        >
          <i className="far fa-envelope"></i>
        </div>
        <div
          className="circle"
          onClick={() => {
            openTab("https://www.xing.com/profile/Jovan_Shandro/cv");
            ReactGa.event({
              category: "Contact",
              action: "Opened xing"
            });
          }}
        >
          <img src="./img/xing.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;
