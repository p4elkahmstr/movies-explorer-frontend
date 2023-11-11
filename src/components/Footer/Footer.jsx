import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__subtitle">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__line"></div>
      <div className="footer__copyright">
        <p className="footer__copyright-year">&copy; 2023</p>
        <ul className="footer__copyright-links">
          <li>
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              className="footer__copyright-link"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              href="https://github.com/p4elkahmstr"
              target="_blank"
              className="footer__copyright-link"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
