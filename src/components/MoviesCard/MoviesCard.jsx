import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({ onAddToUserList, card, onDelete, savedMovies }) => {
  const isLiked = savedMovies.some(
    (item) => Number(item.movieId) === card.movieId
  );

  function handleAddCard(card) {
    onAddToUserList(card);
  }

  function handleDeleteCard(card) {
    onDelete(card);
  }

  return (
    <section className="movies-card">
      {!isLiked ? (
        <button
          className="movies-card__save-btn"
          type="submit"
          onClick={() => handleAddCard(card)}
        >
          Сохранить
        </button>
      ) : (
        <button
          className="movies-card__save-btn"
          type="submit"
          onClick={() => handleDeleteCard(card)}
        >
          Удалить
        </button>
      )}

      <a href={`${card.trailerLink}`} target="_blank">
        <img src={card.image} alt={card.alt} className="movies-card__img" />
      </a>
      <div className="movies-card__subtitle">
        <h2 className="movies-card__subtitle-title">{card.nameRU}</h2>
        <div className="movies-card__subtitle-duration">{card.duration}м</div>
      </div>
    </section>
  );
};

export default MoviesCard;
