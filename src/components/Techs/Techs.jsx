import React from "react";
import "./Techs.css";

const Techs = () => {
  return (
    <div className="techs" id="techs">
      <h2 className="techs__header">Технологии</h2>
      <div className="techs__line"></div>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__list">
        <div className="techs__list_object">HTML</div>
        <div className="techs__list_object">CSS</div>
        <div className="techs__list_object">JS</div>
        <div className="techs__list_object">React</div>
        <div className="techs__list_object">Git</div>
        <div className="techs__list_object">Express.js</div>
        <div className="techs__list_object">mongoDB</div>
      </div>
    </div>
  );
};

export default Techs;
