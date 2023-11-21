import React, { useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

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
  useEffect(() => {
    console.log("useEffect isChecked", isChecked);
  }, [isChecked]);
  console.log("cards", cards);

  const movies = isChecked
    ? cards.filter((el) => el.duration < 41)
    : [...cards];
  // console.log("movies", movies);
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
            key={el.movieId}
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
