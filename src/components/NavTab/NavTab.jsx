import React from "react";
import "./NavTab.css";

const NavTab = () => {
  return (
    <nav className="navtab-container">
      <ul className="navtab">
        <li>
          <a className="navtab__button" href="#about-project">
            О проекте
          </a>
        </li>
        <li>
          <a className="navtab__button" href="#techs">
            Технологии
          </a>
        </li>
        <li>
          <a className="navtab__button" href="#about-me">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
