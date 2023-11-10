import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <main>
      <section className="profile">
        <h1 className="profile__header">Привет, Айза!</h1>
        <div className="profile__about">
          <p className="profile__about-text">Имя</p>
          <p className="profile__about-text">Айза</p>
        </div>
        <div className="profile__line"></div>
        <div className="profile__about">
          <p className="profile__about-text">E-mail</p>
          <p className="profile__about-text">pochta@yandex.ru</p>
        </div>
        <p className="profile__edit">Редактировать</p>
        <a href="/signin" className="profile__logout">
          Выйти из аккаунта
        </a>
      </section>
    </main>
  );
};

export default Profile;
