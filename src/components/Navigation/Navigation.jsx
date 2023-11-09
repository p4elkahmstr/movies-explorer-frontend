import React from "react";
import "./Navigation.css";

const Navigation = ({ isOpen, onClose }) => {
  return (
    <section
      className={`navigations ${isOpen === true ? "navigations_opened" : ""}`}
      onClick={onClose}
    >
      <div className="navigation">
        <div className="navigation__container">
          <button className="navigation__close" type="button" />
          <div className="navigation__links">
            <a className="navigation__links_link" href="/" target="_blank">
              Главная
            </a>
            <a
              className="navigation__links_link navigation__links_link_active"
              href="movies"
              target="_blank"
            >
              Фильмы
            </a>
            <a
              className="navigation__links_link"
              href="saved-movies"
              target="_blank"
            >
              Сохранённые фильмы
            </a>
          </div>
          <button className="navigation__links_button" type="button">
            Аккаунт
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
