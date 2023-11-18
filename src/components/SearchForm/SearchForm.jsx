import React from "react";
import "./SearchForm.css";
import find from "../../images/find.svg";

const SearchForm = ({ onChange, onSearch, value, isChecked, onCheck }) => {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <form className="search-form" onSubmit={onSearch}>
      <div className="search-form__container">
        <input
          className="search-form__container-input"
          placeholder="Фильм"
          value={value}
          onChange={handleChange}
          required
          minLength="2"
          maxLength="40"
        />
        <button className="search-form__container-button" type="button">
          <img
            src={find}
            alt="arrow"
            className="search-form__container-button-img"
          />
        </button>
      </div>
      <div className="search-form__switch">
        <label className="search-form__checkbox" htmlFor="checkbox">
          <input
            className="search-form__checkbox-input"
            type="checkbox"
            id="checkbox"
            checked={isChecked}
            onChange={() => onCheck(!isChecked)}
          />
          <span className="search-form__checkbox-inner">Короткометражки</span>
        </label>
      </div>
      <div className="search-form__line" />
    </form>
  );
};

export default SearchForm;
