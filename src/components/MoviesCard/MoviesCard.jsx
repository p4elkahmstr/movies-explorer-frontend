import React from "react";
import "./MoviesCard.css";
import saved from "../../images/saved.svg";
import exit from "../../images/exit.svg";
import { useLocation } from "react-router-dom";

const MoviesCard = ({ onAddToUserList, card, onDelete, savedMovies }) => {
  const localSavedMovies = JSON.parse(localStorage.savedMovies);

  const location = useLocation();
  const isLiked = localSavedMovies
    ? localSavedMovies.some((item) => Number(item.movieId) === card.movieId)
    : false;
  function handleAddCard(card) {
    onAddToUserList(card);
  }

  function handleDeleteCard(card) {
    onDelete(card);
  }

  return (
    <section className="movies-card">
      {location.pathname === "/movies" ? (
        !isLiked ? (
          <button
            className="movies-card__save-btn"
            type="submit"
            onClick={() => handleAddCard(card)}
          >
            Сохранить
          </button>
        ) : (
          <button
            className="movies-card__saved-btn"
            type="submit"
            onClick={() => handleDeleteCard(card)}
          >
            <img src={saved} alt="like icon" />
          </button>
        )
      ) : null}
      {location.pathname === "/saved-movies" ? (
        <button
          className="movies-card__delete-btn"
          type="submit"
          onClick={() => handleDeleteCard(card)}
        >
          <img src={exit} alt="delete icon" />
        </button>
      ) : null}
      <a href={`${card.trailerLink}`} target="_blank">
        <img
          src={card.image}
          alt={`Постер фильма ${card.nameRU.trim()}`}
          className="movies-card__img"
        />
      </a>
      <div className="movies-card__subtitle">
        <h2 className="movies-card__subtitle-title">{card.nameRU}</h2>
        <div className="movies-card__subtitle-duration">{card.duration}м</div>
      </div>
    </section>
  );
};

export default MoviesCard;
