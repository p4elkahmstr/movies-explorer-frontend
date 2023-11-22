import { BASE_URL_MOVIES } from "./constants";

export const mapToArray = (array) => {
  return array.map((item) => ({
    country: item.country,
    director: item.director,
    duration: item.duration,
    year: item.year,
    description: item.description,
    image: BASE_URL_MOVIES + item.image.url,
    trailerLink: item.trailerLink,
    thumbnail: BASE_URL_MOVIES + item.image.formats.thumbnail.url,
    movieId: item.id,
    nameRU: item.nameRU,
    nameEN: item.nameEN,
  }));
};
