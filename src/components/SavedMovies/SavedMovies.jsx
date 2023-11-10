import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = () => {
  return (
    <main>
      <section className="saved-movies" id="saved-movies">
        <SearchForm />
        <MoviesCardList />
      </section>
    </main>
  );
};

export default SavedMovies;
