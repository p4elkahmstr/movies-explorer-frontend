import React, { useState } from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import burger from "../../images/burger.svg";

const Header = () => {
  const [auth, setAuth] = useState(false);
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      {!auth ? (
        <>
          <div className="header__navigation">
            <button className="header__navigation_button">Фильмы</button>
            <button className="header__navigation_button">
              Сохранённые фильмы
            </button>
          </div>
          <img className="header__burger" alt="burger" src={burger} />
          <button className="header__button">Аккаунт</button>
        </>
      ) : (
        <>
          <div className="header__auth">
            <button className="header__auth_signup">Регистрация</button>
            <button className="header__auth_signin">Войти</button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
