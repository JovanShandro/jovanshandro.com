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
            window.open("mailto:shandrojovan@gmail.com");
            ReactGa.event({
              category: "Contact",
              action: "Opened email"
            });
          }}
        >
          <i className="far fa-envelope"></i>
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;
