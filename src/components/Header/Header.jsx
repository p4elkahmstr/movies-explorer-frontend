import React, { useState } from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import burger from "../../images/burger.svg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const [auth, setAuth] = useState(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
    console.log(isBurgerMenuOpen);
  };

  return (
    <header className="header ">
      <Link to="/" className="header__logo-link">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>

      {auth ? (
        <>
          <div className="header__navigation">
            <a href="movies" className="header__navigation-button">
              Фильмы
            </a>
            <a
              href="saved-movies"
              className="header__navigation-button header__saved-movies"
            >
              Сохранённые фильмы
            </a>
          </div>
          <img
            className="header__burger"
            alt="burger"
            src={burger}
            onClick={handleBurgerMenu}
          />
          <div className="h">
            <a className="header__button" href="/profile">
              Аккаунт
            </a>
          </div>
          <Navigation
            isOpen={isBurgerMenuOpen}
            onClose={() => setIsBurgerMenuOpen(false)}
          />
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
