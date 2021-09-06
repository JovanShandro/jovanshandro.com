import React from "react";
import styles from "./Contacts.module.css";

const ContactsSection = () => {
  const openTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={`wrapper ${styles.contact} `} id="contact">
      <h1>Contact</h1>
      <div className={styles.iconWrapper}>
        <div
          className={styles.circle}
          onClick={() => {
            openTab("https://www.linkedin.com/in/jovan-shandro-8694a7158");
          }}
        >
          <i className="fab fa-linkedin-in"></i>
        </div>
        <div
          className={styles.circle}
          onClick={() => {
            window.open("mailto:shandrojovan@gmail.com");
          }}
        >
          <i className="far fa-envelope"></i>
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;
