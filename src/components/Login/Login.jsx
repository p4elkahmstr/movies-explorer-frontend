import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";

const Login = () => {
  return (
    <section className="login">
      <div className="login__header">
        <img src={logo} alt="logo" className="login__logo" />
        <h2 className="login__message">Рады видеть!</h2>
      </div>
      <form className="login__form">
        <label for="email" className="login__form_label">
          E-mail
        </label>
        <input
          id="email"
          className="login__form_input"
          required
          placeholder="Введите E-mail..."
        />
        <label for="password" className="login__form_label">
          Пароль
        </label>
        <input
          id="password"
          className="login__form_input"
          required
          placeholder="Введите пароль..."
          minLength={2}
          maxLength={40}
        />
        <button className="login__form_submit" type="submit">
          Войти
        </button>
        <p className="login__form_subtitle">
          Ещё не зарегистрированы?
          <a href="/signup" className="login__form_span">
            Регистрация
          </a>
        </p>
      </form>
    </section>
  );
};

export default Login;
