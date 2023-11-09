import React from "react";
import "./Promo.css";
import NavTab from "../NavTab/NavTab";

const Promo = () => {
  return (
    <>
      <section className="promo">
        <p className="promo__text">
          Учебный проект студента факультета Веб-разработки.
        </p>
      </section>
      <NavTab />
    </>
  );
};

export default Promo;
