import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__subtitle">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__line"></div>
      <div className="footer__copyright">
        <p className="footer__copyright_year">&copy; 2023</p>
        <div className="footer__copyright_links">
          <button className="footer__copyright_links_link">
            Яндекс.Практикум
          </button>
          <button className="footer__copyright_links_link">Github</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
