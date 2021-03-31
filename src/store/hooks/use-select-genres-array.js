import {shallowEqual, useSelector} from "react-redux";

export const selectGenresArray = (FILMS) => {
  const found = [...new Set(FILMS.map((film) => film.genre))];
  return found;
};

export const useSelectGenresArray = () => useSelector(({FILMS}) => selectGenresArray(FILMS), shallowEqual);
