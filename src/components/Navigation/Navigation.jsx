import React from "react";
import "./Navigation.css";

const Navigation = ({ isOpen, onClose }) => {
  return (
    <nav
      className={`navigations${isOpen === true ? "_opened" : ""}`}
      onClick={onClose}
    >
      <div className="navigation">
        <div className="navigation__container">
          <button className="navigation__close" type="button" />
          <div className="navigation__links">
            <a className="navigation__links_link" href="/">
              Главная
            </a>
            <a
              className="navigation__links_link navigation__links_link_active"
              href="movies"
            >
              Фильмы
            </a>
            <a className="navigation__links_link" href="saved-movies">
              Сохранённые фильмы
            </a>
          </div>
          <button className="navigation__links_button" type="button">
            Аккаунт
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
