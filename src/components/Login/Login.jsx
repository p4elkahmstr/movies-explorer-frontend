import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";

const Login = () => {
  return (
    <div className="login">
      <div className="login__header">
        <img src={logo} alt="logo" className="login__logo" />
        <h2 className="login__message">Рады видеть!</h2>
      </div>
      <form className="login__form">
        <label for="email" className="login__form_label">
          E-mail
        </label>
        <input className="login__form_input"></input>
        <label for="password" className="login__form_label">
          Пароль
        </label>
        <input className="login__form_input"></input>
        <button className="login__form_submit">Войти</button>
        <p className="login__form_subtitle">
          Ещё не зарегистрированы?
          <span className="login__form_span">Регистрация</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
