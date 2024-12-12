import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav-bar">
      <h1 className="logo">Prem</h1>
      <div className={`nav-items ${isOpen ? "show" : ""}`}>
        <a href="#about"><p>About</p></a>
        <a href="#projects"><p>Projects</p></a>
        <a href="#contact"><button className="primary-button-2">Contact Me</button></a>
      </div>
      <div className="menu-contact-container">
       <div className="primary-button-1">
        <a href="#contact"><button  className="primary-button-2">Contact Me</button></a></div>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src="/icons/hamburger.svg" alt="Menu" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
