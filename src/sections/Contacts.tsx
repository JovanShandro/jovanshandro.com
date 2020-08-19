import React from "react";

const ContactsSection = () => {
  return (
    <div className="wrapper contact" id="contact">
      <h1>Contact</h1>
      <div className="icon-wrapper">
        <div className="circle" onClick={() => "toLinkedIn()"}>
          <i className="fab fa-linkedin-in"></i>
        </div>
        <div className="circle" onClick={() => "toFacebook()"}>
          <i className="fab fa-facebook-f"></i>
        </div>
        <div className="circle" onClick={() => "toInsta()"}>
          <i className="fab fa-instagram"></i>
        </div>
        <div className="circle" onClick={() => "sendmail()"}>
          <i className="far fa-envelope"></i>
        </div>
        <div className="circle" onClick={() => "toXing()"}>
          <img src="./img/xing.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;
