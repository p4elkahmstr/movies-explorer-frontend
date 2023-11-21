import React, { useEffect } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

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
  useEffect(() => {
    const query = localStorage.getItem("query");
    if (query?.length > 0) {
      onChange(query);
      onSearch(query);
    }
  }, []);

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
            isChecked={isChecked}
          />
        )}
      </section>
    </main>
  );
}

export default Movies;
