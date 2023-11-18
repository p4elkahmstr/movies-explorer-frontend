import { BASE_URL_INIT_MOVIES } from "./constants";

function getInitialMovies() {
  return fetch(BASE_URL_INIT_MOVIES, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => console.log(e));
}

export { getInitialMovies };
