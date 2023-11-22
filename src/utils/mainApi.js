import { MAIN_API_URL } from "./constants";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

const login = ({ email, password }) => {
  return fetch(`${MAIN_API_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => checkResponse(res));
};

const register = ({ name, email, password }) => {
  return fetch(`${MAIN_API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  }).then((res) => checkResponse(res));
};

const getUserInfo = () => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => checkResponse(res));
};

const setUserInfo = (newDataOfUser) => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newDataOfUser.name,
      email: newDataOfUser.email,
    }),
  }).then((res) => checkResponse(res));
};

const getUserMovies = () => {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  }).then((res) => checkResponse(res));
};

const addMovie = (movieCard) => {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: movieCard.country,
      director: movieCard.director,
      duration: movieCard.duration,
      year: movieCard.year,
      description: movieCard.description,
      image: movieCard.image,
      trailerLink: movieCard.trailerLink,
      nameRU: movieCard.nameRU,
      nameEN: movieCard.nameEN,
      thumbnail: movieCard.thumbnail,
      movieId: movieCard.movieId,
    }),
  }).then((res) => checkResponse(res));
};

const deleteMovie = (id) => {
  return fetch(`${MAIN_API_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  }).then((res) => checkResponse(res));
};

export {
  login,
  register,
  getUserInfo,
  getUserMovies,
  setUserInfo,
  addMovie,
  deleteMovie,
};
