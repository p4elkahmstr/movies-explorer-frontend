import React, { useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { SHORT_MOVIE_DURATION } from "../../utils/constants";

const MoviesCardList = ({
  didUserSearch,
  cards,
  renderedMovies,
  showMoreMovies,
  onAddToUserList,
  savedMovies,
  onDelete,
  isChecked,
}) => {
  const location = useLocation();

  const movies = isChecked
    ? cards.filter((el) => el.duration < SHORT_MOVIE_DURATION)
    : [...cards];
  if (didUserSearch && cards.length === 0) {
    return <p className="card-list__message">Ничего не найдено</p>;
  }

  return (
    <>
      <section className="movies-card-list">
        {movies.slice(0, renderedMovies).map((el) => (
          <MoviesCard
            card={el}
            onAddToUserList={onAddToUserList}
            key={el.id || el._id}
            savedMovies={savedMovies}
            onDelete={onDelete}
          />
        ))}
      </section>
      {location.pathname === "/movies" && cards.length > renderedMovies && (
        <button
          onClick={showMoreMovies}
          className="movies__more-btn"
          type="button"
        >
          Ещё
        </button>
      )}
    </>
  );
};

export default MoviesCardList;
