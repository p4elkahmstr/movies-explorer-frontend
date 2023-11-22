import "./SearchForm.css";
import find from "../../images/find.svg";
import useFormWithValidation from "../../hooks/useFormValidation";
import { useEffect } from "react";

const SearchForm = ({ onChange, onSearch, value, isChecked, onCheck }) => {
  const { values, setValues, handleInputChange, errors } =
    useFormWithValidation({});

  useEffect(() => {
    setValues((prev) => ({ ...prev, search: value }));
  }, [value]);

  function handleChange(e) {
    onChange(e.target.value);
    handleInputChange(e);
  }

  function onSubmit(e) {
    e.preventDefault();
    onSearch(value);
    handleInputChange({
      target: {
        name: "search",
        value: value,
      },
    });
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  }

  return (
    <form name="search-form" className="search-form" onSubmit={onSubmit}>
      <div className="search-form__container">
        <input
          className="search-form__container-input"
          placeholder="Фильм"
          value={values.search}
          id="search"
          name="search"
          form="search-form"
          onChange={handleChange}
          required
          onKeyDown={handleKeyDown}
        />
        <button className="search-form__container-button" type="submit">
          <img
            src={find}
            alt="arrow"
            className="search-form__container-button-img"
          />
        </button>
      </div>
      <span
        className={`search__form-input-error ${
          errors.search ? "search__form-input-error_active" : ""
        }`}
      >
        {errors.search || ""}
      </span>
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
