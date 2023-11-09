import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile">
      <h1 className="profile__header">Привет, Айза!</h1>
      <div className="profile__about">
        <p className="profile__about_text">Имя</p>
        <p className="profile__about_text">Айза</p>
      </div>
      <div className="profile__line"></div>
      <div className="profile__about">
        <p className="profile__about_text">E-mail</p>
        <p className="profile__about_text">pochta@yandex.ru</p>
      </div>
      <p className="profile__edit">Редактировать</p>
      <a href="/signin" target="_blank" className="profile__logout">
        Выйти из аккаунта
      </a>
    </section>
  );
};

export default Profile;
