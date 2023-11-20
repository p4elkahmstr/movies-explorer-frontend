import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../hooks/useFormValidation";

const Register = ({ handleRegister, onLoading, errorMessage }) => {
  const { values, errors, isFormValid, onChange } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values);
  }

  return (
    <main>
      <section className="register">
        <div className="register__header">
          <Link to="/" className="register__logo-link">
            <img src={logo} alt="logo" className="register__logo" />
          </Link>
          <h1 className="register__message">Добро пожаловать!</h1>
        </div>
        <form
          className="register__form"
          onSubmit={handleSubmit}
          isFormValid={isFormValid}
          name="register"
          noValidate
        >
          <label htmlFor="name" className="register__form-label">
            Имя
          </label>
          <input
            className="register__form-input"
            required
            placeholder="Введите Имя..."
            minLength={2}
            maxLength={40}
            id="name"
            name="name"
            form="register"
            onChange={onChange}
            value={values.name || ""}
            disabled={onLoading ? true : false}
          />
          <span
            className={`register__form-input-error ${
              errors.name ? "register__form-input-error_active" : ""
            }`}
          >
            {errors.name || ""}
          </span>
          <label htmlFor="email" className="register__form-label">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            className="register__form-input"
            required
            placeholder="Введите E-mail..."
            form="register"
            onChange={onChange}
            value={values.email || ""}
            disabled={onLoading ? true : false}
          />
          <span
            className={`register__form-input-error ${
              errors.email ? "register__form-input-error_active" : ""
            }`}
          >
            {errors.email || ""}
          </span>
          <label htmlFor="password" className="register__form-label">
            Пароль
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="register__form-input"
            required
            placeholder="Введите пароль..."
            minLength={2}
            maxLength={40}
            form="register"
            onChange={onChange}
            value={values.password || ""}
            disabled={onLoading ? true : false}
          />
          <span
            className={`register__form-input-error ${
              errors.password ? "register__form-input-error_active" : ""
            }`}
          >
            {errors.password || ""}
          </span>
          <button
            className="register__form-submit"
            type="submit"
            disabled={!isFormValid || onLoading}
          >
            Зарегистрироваться
          </button>
          <p className="register__form_error-message">{errorMessage}</p>
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
