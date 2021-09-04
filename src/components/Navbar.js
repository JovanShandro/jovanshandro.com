import React, { useEffect, useState } from "react";

const NavLinks = [
  { ref: "#", name: "Home" },
  { ref: "#about", name: "About" },
  {
    ref: "#skills",
    name: "Skills",
  },
  {
    ref: "#work",
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
    <nav>
      <div className="nav-content-wrapper">
        <div className="nav-brand">
          <h1 id="nav-h1">JSh</h1>
        </div>
        <div className="hamburger" onClick={() => setIsOpen((v) => !v)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          {NavLinks.map((link, i) => (
            <li className={isOpen ? "fade" : ""} key={i}>
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
