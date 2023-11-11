import React from "react";
import "./SearchForm.css";
import find from "../../images/find.svg";

const SearchForm = () => {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <input
          className="search-form__container-input"
          placeholder="Фильм"
        ></input>
        <button className="search-form__container-button" type="button">
          <img
            src={find}
            alt="arrow"
            className="search-form__container-button-img"
          />
        </button>
      </div>
      <div className="search-form__switch">
        <label className="search-form__checkbox" for="checkbox">
          <input
            className="search-form__checkbox-input"
            type="checkbox"
            id="checkbox"
          />
          <span className="search-form__checkbox-inner">Короткометражки</span>
        </label>
      </div>
      <div className="search-form__line" />
    </form>
  );
};

export default SearchForm;
