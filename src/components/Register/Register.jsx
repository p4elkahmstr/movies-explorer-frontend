import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main>
      <section className="register">
        <div className="register__header">
          <Link to="/" className="register__logo-link">
            <img src={logo} alt="logo" className="register__logo" />
          </Link>
          <h1 className="register__message">Добро пожаловать!</h1>
        </div>
        <form className="register__form">
          <label for="name" className="register__form-label">
            Имя
          </label>
          <input
            className="register__form-input"
            required
            placeholder="Введите Имя..."
            minLength={2}
            maxLength={40}
            id="name"
          />
          <label for="email" className="register__form-label">
            E-mail
          </label>
          <input
            id="email"
            className="register__form-input"
            required
            placeholder="Введите E-mail..."
          />
          <label for="password" className="register__form-label">
            Пароль
          </label>
          <input
            id="password"
            className="register__form-input"
            required
            placeholder="Введите пароль..."
            minLength={2}
            maxLength={40}
          />
          <button className="register__form-submit" type="submit">
            Зарегистрироваться
          </button>
          <p className="register__form-subtitle">
            Уже зарегистрированы?
            <a href="/signin" className="register__form-span">
              Войти
            </a>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Register;
