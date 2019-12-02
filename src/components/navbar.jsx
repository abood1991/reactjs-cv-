import React from "react";

const Navbar = () => {
  return (
    <header>
      <ul className="nav-area">
        <li>
          {" "}
          <a href="#about">ABOUT </a>
        </li>
        <li>
          {" "}
          <a href="#Education">EDUCATION</a>
        </li>
        <li>
          {" "}
          <a href="#skills">SKILLS</a>
        </li>
        <li>
          {" "}
          <a href="#interests">INTERESTS</a>
        </li>
        <li>
          {" "}
          <a href="#languages">LANGUAGES</a>
        </li>
        <li>
          {" "}
          <a href="#contact-info">contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
