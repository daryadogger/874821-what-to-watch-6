import {shallowEqual, useSelector} from "react-redux";

export const selectFilms = (FILMS) => {
  const found = FILMS;
  return found;
};

export const useSelectFilms = () => useSelector(({FILMS}) => selectFilms(FILMS), shallowEqual);
