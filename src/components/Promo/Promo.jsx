import React from "react";
import "./Promo.css";
import NavTab from "../NavTab/NavTab";

const Promo = () => {
  return (
    <>
      <div className="promo">
        <p className="promo__text">
          Учебный проект студента факультета Веб-разработки.
        </p>
      </div>
      <NavTab />
    </>
  );
};

export default Promo;
