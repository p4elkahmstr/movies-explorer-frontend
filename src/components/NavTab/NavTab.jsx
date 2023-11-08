import React from "react";
import "./NavTab.css";

const NavTab = () => {
  return (
    <div className="navtab">
      <a className="navtab__button" href="#about-project">
        О проекте
      </a>
      <a className="navtab__button" href="#techs">
        Технологии
      </a>
      <a className="navtab__button" href="#about-me">
        Студент
      </a>
    </div>
  );
};

export default NavTab;
