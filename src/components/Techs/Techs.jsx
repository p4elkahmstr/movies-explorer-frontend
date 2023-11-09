import React from "react";
import "./Techs.css";

const Techs = () => {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__header">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__list_object">HTML</li>
        <li className="techs__list_object">CSS</li>
        <li className="techs__list_object">JS</li>
        <li className="techs__list_object">React</li>
        <li className="techs__list_object">Git</li>
        <li className="techs__list_object">Express.js</li>
        <li className="techs__list_object">mongoDB</li>
      </ul>
    </section>
  );
};

export default Techs;
