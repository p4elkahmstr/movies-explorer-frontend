import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <h2 className="profile__header">Привет, Айза!</h2>
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
      <p className="profile__logout">Выйти из аккаунта</p>
    </div>
  );
};

export default Profile;
