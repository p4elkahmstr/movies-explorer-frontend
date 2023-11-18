import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = ({
  cards,
  value,
  onChange,
  onSearch,
  isChecked,
  onCheck,
  onDelete,
  savedMovies,
}) => {
  console.log(cards);
  return (
    <main>
      <section className="saved-movies" id="saved-movies">
        <SearchForm
          value={value}
          onChange={onChange}
          onSearch={onSearch}
          isChecked={isChecked}
          onCheck={onCheck}
        />
        <MoviesCardList
          cards={cards}
          onDelete={onDelete}
          savedMovies={savedMovies}
        />
      </section>
    </main>
  );
};

export default SavedMovies;
