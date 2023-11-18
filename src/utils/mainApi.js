import { BASE_URL_MOVIES, MAIN_API_URL } from "./constants";

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
  })
    .then((res) => res.json())
    .then((token) => token)
    .catch((err) => Promise.reject(`${err.message}`));
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
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => console.error(e));
};

const getUserInfo = (token) => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((e) => console.error(e));
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
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

const getUserMovies = () => {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
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
  }).then((res) => res.json());
};

const deleteMovie = (id) => {
  return fetch(`${MAIN_API_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
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
