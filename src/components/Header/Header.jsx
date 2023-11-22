import React, { useState } from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import burger from "../../images/burger.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header = ({ auth }) => {
  const location = useLocation();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <header className="header ">
      <Link to="/" className="header__logo-link">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>

      {auth ? (
        <>
          <div className="header__navigation">
            <NavLink
              to="/movies"
              className={
                location.pathname === "/movies"
                  ? "header__navigation-button_active"
                  : "header__navigation-button"
              }
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={
                location.pathname === "/saved-movies"
                  ? "header__navigation-button_active header__saved-movies"
                  : "header__navigation-button header__saved-movies"
              }
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <img
            className="header__burger"
            alt="burger"
            src={burger}
            onClick={handleBurgerMenu}
          />
          <div className="h">
            <Link className="header__button" to="/profile">
              Аккаунт
            </Link>
          </div>
          <Navigation
            isOpen={isBurgerMenuOpen}
            onClose={() => setIsBurgerMenuOpen(false)}
          />
        </>
      ) : (
        <>
          <div className="header__auth">
            <Link to="/signup">
              <button className="header__auth_signup" type="submit">
                Регистрация
              </button>
            </Link>
            <Link to="/signin">
              <button className="header__auth_signin" type="submit">
                Войти
              </button>
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
