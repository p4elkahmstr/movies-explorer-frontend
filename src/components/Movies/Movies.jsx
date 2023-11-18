import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router-dom";

function Movies({
  value,
  onCheck,
  onChange,
  isChecked,
  onSearch,
  renderedMovies,
  showMoreMovies,
  cards,
  onAddToUserList,
  onDelete,
  didUserSearch,
  savedMovies,
  loading,
}) {
  const location = useLocation();

  return (
    <main>
      <section className="movies" id="movies">
        <SearchForm
          value={value}
          onChange={onChange}
          onSearch={onSearch}
          onCheck={onCheck}
          isChecked={isChecked}
        />
        {loading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            renderedMovies={renderedMovies}
            onAddToUserList={onAddToUserList}
            onDelete={onDelete}
            showMoreMovies={showMoreMovies}
            cards={cards}
            didUserSearch={didUserSearch}
            savedMovies={savedMovies}
          />
        )}
      </section>
    </main>
  );
}

export default Movies;
