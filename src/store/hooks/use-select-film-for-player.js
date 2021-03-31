import {shallowEqual, useSelector} from "react-redux";

export const selectFilmForPlayer = (FILMS, id) => {
  const found = FILMS.find((el) => el.id === id);
  return found;
};

export const useSelectFilmForPlayer = (id) => useSelector(({FILMS}) => selectFilmForPlayer(FILMS, id), shallowEqual);
