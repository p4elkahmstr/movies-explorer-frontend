import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

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
            <Link className="navigation__links-link" to="/">
              Главная
            </Link>
            <Link
              className="navigation__links-link navigation__links-link_active"
              to="movies"
            >
              Фильмы
            </Link>
            <Link className="navigation__links-link" to="saved-movies">
              Сохранённые фильмы
            </Link>
          </div>
          <Link to="profile" className="navigation__links-button">
            Аккаунт
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
