import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = () => {
  return (
    <div className="saved-movies" id="saved-movies">
      <SearchForm />
      <MoviesCardList />
      <MoviesCard />
    </div>
  );
};

export default SavedMovies;
