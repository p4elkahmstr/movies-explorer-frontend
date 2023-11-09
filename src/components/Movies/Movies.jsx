import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = () => {
  return (
    <section className="movies" id="movies">
      <SearchForm />
      <MoviesCardList />
      <button className="movies__more-btn" type="button">
        Ещё
      </button>
    </section>
  );
};

export default Movies;
