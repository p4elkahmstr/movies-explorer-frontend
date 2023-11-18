import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../hooks/useFormValidation";

const Login = ({ handleLogin, onLoading }) => {
  const { values, errors, isFormValid, onChange } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values);
  }

  return (
    <main>
      <section className="login">
        <div className="login__header">
          <Link to="/" className="login__logo-link">
            <img src={logo} alt="logo" className="login__logo" />
          </Link>
          <h1 className="login__message">Рады видеть!</h1>
        </div>
        <form
          className="login__form"
          onSubmit={handleSubmit}
          isFormValid={isFormValid}
          name="login"
          noValidate
        >
          <label htmlFor="email" className="login__form-label">
            E-mail
          </label>
          <input
            id="email"
            className="login__form-input"
            name="email"
            form="login"
            required
            placeholder="Введите E-mail..."
            onChange={onChange}
            value={values.email || ""}
            disabled={onLoading ? true : false}
          />
          <span
            className={`login__form-input-error ${
              errors.email ? "login__form-input-error_active" : ""
            }`}
          >
            {errors.email || ""}
          </span>
          <label htmlFor="password" className="login__form-label">
            Пароль
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="login__form-input"
            required
            form="login"
            placeholder="Введите пароль..."
            minLength={2}
            maxLength={40}
            onChange={onChange}
            disabled={onLoading ? true : false}
            value={values.password || ""}
          />
          <span
            className={`login__form-input-error ${
              errors.password ? "login__form-input-error_active" : ""
            }`}
          >
            {errors.password || ""}
          </span>
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
