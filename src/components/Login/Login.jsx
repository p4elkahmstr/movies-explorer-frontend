import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main>
      <section className="login">
        <div className="login__header">
          <Link to="/" className="login__logo-link">
            <img src={logo} alt="logo" className="login__logo" />
          </Link>
          <h1 className="login__message">Рады видеть!</h1>
        </div>
        <form className="login__form">
          <label for="email" className="login__form-label">
            E-mail
          </label>
          <input
            id="email"
            className="login__form-input"
            required
            placeholder="Введите E-mail..."
          />
          <label for="password" className="login__form-label">
            Пароль
          </label>
          <input
            id="password"
            className="login__form-input"
            required
            placeholder="Введите пароль..."
            minLength={2}
            maxLength={40}
          />
          <button className="login__form-submit" type="submit">
            Войти
          </button>
          <p className="login__form-subtitle">
            Ещё не зарегистрированы?
            <a href="/signup" className="login__form-span">
              Регистрация
            </a>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;
