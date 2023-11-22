import React, { useEffect } from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../hooks/useFormValidation";

const Login = ({ handleLogin, onLoading, errorMessage, setMessage }) => {
  const { values, errors, isFormValid, handleInputChange } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  useEffect(() => {
    setMessage("");
  }, []);

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
            onChange={handleInputChange}
            value={values.email || ""}
            disabled={onLoading ? true : false}
            onKeyDown={handleKeyDown}
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
            onChange={handleInputChange}
            disabled={onLoading ? true : false}
            value={values.password || ""}
            onKeyDown={handleKeyDown}
          />
          <span
            className={`login__form-input-error ${
              errors.password ? "login__form-input-error_active" : ""
            }`}
          >
            {errors.password || ""}
          </span>
          <button
            className="login__form-submit"
            type="submit"
            disabled={!isFormValid || onLoading}
          >
            Войти
          </button>
          <p className="login__form_error-message">{errorMessage}</p>
          <p className="login__form-subtitle">
            Ещё не зарегистрированы?
            <Link to="/signup" className="login__form-span">
              Регистрация
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;
