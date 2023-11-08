import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = () => {
  return (
    <div className="movies" id="movies">
      <SearchForm />
      <MoviesCardList />
      <button className="movies__more-btn">Ещё</button>
    </div>
  );
};

export default Movies;
