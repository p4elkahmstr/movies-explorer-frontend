import React, { useState } from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import burger from "../../images/burger.svg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const [auth, setAuth] = useState(false);
  return (
    <header className="header">
      <Link to="/" className="header__logo_link">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>

      {!auth ? (
        <>
          <div className="header__navigation">
            <a
              href="movies"
              target="_blank"
              className="header__navigation_button"
            >
              Фильмы
            </a>
            <a
              href="saved-movies"
              target="_blank"
              className="header__navigation_button"
            >
              Сохранённые фильмы
            </a>
          </div>
          <img className="header__burger" alt="burger" src={burger} />
          <Link className="disable-link" to="/profile" target="_blank">
            <button className="header__button" type="button">
              Аккаунт
            </button>
          </Link>
          <Navigation />
        </>
      ) : (
        <>
          <div className="header__auth">
            <button className="header__auth_signup" type="submit">
              Регистрация
            </button>
            <button className="header__auth_signin" type="submit">
              Войти
            </button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
