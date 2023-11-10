import React from "react";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__header">О проекте</h2>
      <div className="about-project__info">
        <h3 className="about-project__info-title about-project__stages">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="about-project__info-title about-project__weeks">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__info-subtitle about-project__plan">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="about-project__info-subtitle about-project__dedlines">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__scale">
        <p className="about-project__scale-week-one">1 неделя</p>
        <p className="about-project__scale-week-four">4 недели</p>
        <p className="about-project__scale-subtitle">Back-end</p>
        <p className="about-project__scale-subtitle">Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;
