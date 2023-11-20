import React from "react";
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
  isMobile,
}) => {
  const location = useLocation();

  if (didUserSearch && cards.length === 0) {
    return <p className="card-list__message">Ничего не найдено</p>;
  }

  return (
    <>
      <section className="movies-card-list">
        {cards
          .map((el) => (
            <MoviesCard
              card={el}
              onAddToUserList={onAddToUserList}
              key={el.movieId}
              savedMovies={savedMovies}
              onDelete={onDelete}
              isMobile={isMobile}
            />
          ))
          .slice(0, renderedMovies)}
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
