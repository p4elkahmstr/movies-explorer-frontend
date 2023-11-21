import React, { useEffect } from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = ({
  cards,
  setCards,
  value,
  onChange,
  onSearch,
  isChecked,
  onCheck,
  onDelete,
  savedMovies,
}) => {
  useEffect(() => {
    onChange("");
    onCheck(false);
    const localCards = JSON.parse(localStorage.getItem("savedMovies"));
    localCards && setCards(localCards);
  }, []);

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
          isChecked={isChecked}
        />
      </section>
    </main>
  );
};

export default SavedMovies;
