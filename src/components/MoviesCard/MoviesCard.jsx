import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({ image, title, duration }) => {
  return (
    <div className="movies-card">
      <button className="movies-card__save-btn">Сохранить</button>
      <img src={image} alt="" className="movies-card__img" />
      <div className="movies-card__subtitle">
        <h2 className="movies-card__subtitle_title">{title}</h2>
        <div className="movies-card__subtitle_duration">{duration}</div>
      </div>
    </div>
  );
};

export default MoviesCard;
