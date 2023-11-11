import React from "react";
import "./NotFoundError.css";
import { useNavigate } from "react-router-dom";

const NotFoundError = () => {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <main>
      <section className="not-found-error">
        <h1 className="not-found-error__header">404</h1>
        <p className="not-found-error__subtitle">Страница не найдена</p>
        <p className="not-found-error__back" onClick={goBack}>
          Назад
        </p>
      </section>
    </main>
  );
};

export default NotFoundError;
