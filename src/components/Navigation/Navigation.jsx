import React from "react";
import "./Navigation.css";

const Navigation = ({ isOpen, onClose }) => {
  return (
    <nav
      className={`navigations ${isOpen === true ? "navigations_opened" : ""}`}
      onClick={onClose}
    >
      <div className="navigation">
        <div className="navigation__container">
          <button
            className="navigation__close"
            type="button"
            onClick={onClose}
          />
          <div className="navigation__links">
            <a className="navigation__links-link" href="/">
              Главная
            </a>
            <a
              className="navigation__links-link navigation__links-link_active"
              href="movies"
            >
              Фильмы
            </a>
            <a className="navigation__links-link" href="saved-movies">
              Сохранённые фильмы
            </a>
          </div>
          <a href="profile" className="navigation__links-button">
            Аккаунт
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
