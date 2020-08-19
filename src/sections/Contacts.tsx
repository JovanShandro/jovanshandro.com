import React from "react";

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
          onClick={() =>
            openTab("https://www.linkedin.com/in/jovan-shandro-8694a7158")
          }
        >
          <i className="fab fa-linkedin-in"></i>
        </div>
        <div
          className="circle"
          onClick={() => openTab("https://www.facebook.com/shandrojovan")}
        >
          <i className="fab fa-facebook-f"></i>
        </div>
        <div
          className="circle"
          onClick={() => openTab("https://www.instagram.com/jovanshandro/")}
        >
          <i className="fab fa-instagram"></i>
        </div>
        <div
          className="circle"
          onClick={() => window.open("mailto:shandrojovan@gmail.com")}
        >
          <i className="far fa-envelope"></i>
        </div>
        <div
          className="circle"
          onClick={() =>
            openTab("https://www.xing.com/profile/Jovan_Shandro/cv")
          }
        >
          <img src="./img/xing.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;
