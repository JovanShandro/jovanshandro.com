import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const NavLinks = [
  { ref: "#", name: "Home" },
  { ref: "#about", name: "About" },
  {
    ref: "#skills",
    name: "Skills",
  },
  {
    ref: "#projects",
    name: "Projects",
  },
  {
    ref: "#contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 50) {
        document.querySelector("nav").classList.add("scrolled");
      } else {
        document.querySelector("nav").classList.remove("scrolled");
      }
    };
    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContentWrapper}>
        <div className={styles.navBrand}>
          <h1 id="navTitle">JSh</h1>
        </div>
        <div className={styles.hamburger} onClick={() => setIsOpen((v) => !v)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <ul
          className={isOpen ? `${styles.navLinks} ${styles.open}` : `${styles.navLinks}`}
        >
          {NavLinks.map((link, i) => (
            <li className={isOpen ? `${styles.fade}` : ""} key={i}>
              <a href={link.ref} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
