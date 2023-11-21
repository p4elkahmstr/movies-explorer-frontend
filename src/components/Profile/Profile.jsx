import React, { useContext, useEffect } from "react";
import "./Profile.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormValidation";
import { Link } from "react-router-dom";

const Profile = ({
  handleLogout,
  onUpdateUserInfo,
  message,
  setMessage,
  loading,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const {
    values,
    setValues,
    handleInputChange,
    errors,
    isFormValid,
    setFormValid,
    resetValidation,
  } = useFormWithValidation({
    name: "",
    email: "",
  });

  console.log(errors);

  useEffect(() => {
    setMessage("");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUserInfo({
      name: values.name,
      email: values.email,
    });
  }

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  useEffect(() => {
    if (
      values.name === currentUser.name &&
      values.email === currentUser.email
    ) {
      setFormValid(false);
    }
  }, [values]);

  return (
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__header">{`Привет, ${currentUser?.name}!`}</h1>
        <form action="#" className="profile__form" onSubmit={handleSubmit}>
          <label htmlFor="name-input" className="profile__form-item">
            Имя
            <input
              required
              type="text"
              minLength={2}
              maxLength={40}
              className="profile__input"
              name="name"
              id="name-input"
              value={values.name || ""}
              onChange={handleInputChange}
              placeholder="Имя пользователя"
            />
            <p className="profile__input-error">{errors.name}</p>
          </label>
          <label htmlFor="email-input" className="profile__form-item">
            Email
            <input
              required
              type="email"
              minLength={2}
              maxLength={50}
              className="profile__input"
              name="email"
              id="email-input"
              value={values.email || ""}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <p className="profile__input-error">{errors.email}</p>
          </label>
          <div className="profile__message">{message}</div>
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`profile__edit ${
              !isFormValid && "profile__edit_disabled"
            }`}
          >
            Редактировать
          </button>
          <Link
            href="/signin"
            className="profile__logout"
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Profile;
