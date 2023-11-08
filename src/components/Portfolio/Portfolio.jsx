import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a
        className="portfolio__link"
        href="https://github.com/p4elkahmstr/how-to-learn"
        target="_blank"
      >
        <p className="portfolio__link_name">Статичный сайт</p>
        <img src={arrow} alt="arrow" className="portfolio__link_arrow"></img>
      </a>
      <div className="portfolio__line"></div>
      <a
        className="portfolio__link"
        href="https://github.com/p4elkahmstr/russian-travel"
        target="_blank"
      >
        <p className="portfolio__link_name">Адаптивный сайт</p>
        <img src={arrow} alt="arrow" className="portfolio__link_arrow"></img>
      </a>
      <div className="portfolio__line"></div>
      <a
        className="portfolio__link"
        href="https://mesto.pr15.nomoredomainsrocks.ru/signin"
        target="_blank"
      >
        <p className="portfolio__link_name">Одностраничное приложение</p>
        <img src={arrow} alt="arrow" className="portfolio__link_arrow"></img>
      </a>
    </div>
  );
};

export default Portfolio;
