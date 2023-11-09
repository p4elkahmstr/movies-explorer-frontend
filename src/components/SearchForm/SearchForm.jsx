import React from "react";
import "./SearchForm.css";
import find from "../../images/find.svg";
import { Switch } from "@mui/material";
import styled from "@emotion/styled";

const MovieSwitch = styled(Switch)({
  // width: "36px",
  // height: "20px",
  // padding: "0",
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#2BE080", // Change this color to the desired color
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#2BE080", // Change this color to the desired track color
  },
});

const SearchForm = () => {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <input
          className="search-form__container_input"
          placeholder="Фильм"
        ></input>
        <button className="search-form__container_button" type="button">
          <img
            src={find}
            alt="arrow"
            className="search-form__container_button-img"
          />
        </button>
      </div>
      <div className="search-form__switch">
        <MovieSwitch />
        Короткометражки
      </div>
      <div className="search-form__line" />
    </form>
  );
};

export default SearchForm;
