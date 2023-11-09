import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="register">
      <div className="register__header">
        <Link to="/" className="register__logo_link">
          <img src={logo} alt="logo" className="register__logo" />
        </Link>
        <h2 className="register__message">Добро пожаловать!</h2>
      </div>
      <form className="register__form">
        <label for="name" className="register__form_label">
          Имя
        </label>
        <input
          className="register__form_input"
          required
          placeholder="Введите Имя..."
          minLength={2}
          maxLength={40}
        />
        <label for="email" className="register__form_label">
          E-mail
        </label>
        <input
          className="register__form_input"
          required
          placeholder="Введите E-mail..."
        />
        <label for="password" className="register__form_label">
          Пароль
        </label>
        <input
          className="register__form_input"
          required
          placeholder="Введите пароль..."
          minLength={2}
          maxLength={40}
        />
        <button className="register__form_submit" type="submit">
          Зарегистрироваться
        </button>
        <p className="register__form_subtitle">
          Уже зарегистрированы?
          <a href="/signin" className="register__form_span">
            Войти
          </a>
        </p>
      </form>
    </section>
  );
};

export default Register;
