import {shallowEqual, useSelector} from "react-redux";

const selectFilms = (FILMS) => {
  const found = FILMS.films;
  return found;
};

const useSelectFilms = () => useSelector(({FILMS}) => selectFilms(FILMS), shallowEqual);

export {selectFilms, useSelectFilms};
