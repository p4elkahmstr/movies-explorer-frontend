import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/p4elkahmstr/how-to-learn"
            target="_blank"
          >
            <p className="portfolio__link-name">Статичный сайт</p>
            <img
              src={arrow}
              alt="arrow"
              className="portfolio__link-arrow"
            ></img>
          </a>
        </li>
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/p4elkahmstr/russian-travel"
            target="_blank"
          >
            <p className="portfolio__link-name">Адаптивный сайт</p>
            <img
              src={arrow}
              alt="arrow"
              className="portfolio__link-arrow"
            ></img>
          </a>
        </li>
        <li>
          <a
            className="portfolio__link portfolio__link-border-none"
            href="https://mesto.pr15.nomoredomainsrocks.ru/signin"
            target="_blank"
          >
            <p className="portfolio__link-name">Одностраничное приложение</p>
            <img
              src={arrow}
              alt="arrow"
              className="portfolio__link-arrow"
            ></img>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
