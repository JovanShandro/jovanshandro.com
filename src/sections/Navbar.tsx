import React, { useState } from "react";
import { NavLinks } from "../lib/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-content-wrapper">
        <div className="nav-brand">
          <h1 id="nav-h1">JSh</h1>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(v => !v)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          {NavLinks.map(link => (
            <li className={isOpen ? "fade" : ""}>
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
