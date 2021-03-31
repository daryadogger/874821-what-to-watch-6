import {shallowEqual, useSelector} from "react-redux";

export const selectFilm = (FILMS, id) => {
  const found = FILMS.find((el) => el.id === id);
  return found;
};

export const useSelectFilm = (id) => useSelector(({FILMS}) => selectFilm(FILMS, id), shallowEqual);
