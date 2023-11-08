import React from "react";
import "./NotFoundError.css";

const NotFoundError = () => {
  return (
    <div className="not-found-error">
      <h2 className="not-found-error__header">404</h2>
      <p className="not-found-error__subtitle">Страница не найдена</p>
      <p className="not-found-error__back">Назад</p>
    </div>
  );
};

export default NotFoundError;
