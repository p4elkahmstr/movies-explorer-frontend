import React from "react";
import "./AboutMe.css";
import photo from "../../images/photo.jpeg";

const AboutMe = () => {
  return (
    <div className="about-me" id="about-me">
      <h2 className="about-me__header">Студент</h2>
      <div className="about-me__line"></div>
      <div className="about-me__flex">
        <div className="about-me__column">
          <h3 className="about-me__column_name">Айза</h3>
          <h4 className="about-me__column_subtitle">Веб-разработчик, 26 лет</h4>
          <p className="about-me__column_description">
            Я родилась в северном городке - Якутске, переехала в Москву в этом
            году. У меня есть муж и две красавицы-дочки. Я люблю порядок и
            чистоту, а еще учиться новому. С 2020 года работаю инженером в ПАО
            "ДЭК" "Якутскэнергосбыт", на данный момент нахожусь в отпуске по
            уходу за младшей дочерью до 1,5 лет. Дополню текст...
          </p>
          <a
            href="https://github.com/p4elkahmstr"
            target="_blank"
            className="about-me__column_link"
          >
            GitHub
          </a>
        </div>
        <img src={photo} alt="photo" className="about-me__photo"></img>
      </div>
    </div>
  );
};

export default AboutMe;
