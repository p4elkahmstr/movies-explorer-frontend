import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";

const Register = () => {
  return (
    <div className="register">
      <div className="register__header">
        <img src={logo} alt="logo" className="register__logo" />
        <h2 className="register__message">Добро пожаловать!</h2>
      </div>
      <form className="register__form">
        <label for="name" className="register__form_label">
          Имя
        </label>
        <input className="register__form_input"></input>
        <label for="email" className="register__form_label">
          E-mail
        </label>
        <input className="register__form_input"></input>
        <label for="password" className="register__form_label">
          Пароль
        </label>
        <input className="register__form_input"></input>
        <button className="register__form_submit">Зарегистрироваться</button>
        <p className="register__form_subtitle">
          Уже зарегистрированы?
          <span className="register__form_span">Войти</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
