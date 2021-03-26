import {shallowEqual, useSelector} from "react-redux";

const selectFilmsArray = (FILMS, genre, isUpperCase) => {
  const found = FILMS.filter((film) => genre === `` || (isUpperCase ? film.genre === genre : film.genre.toLowerCase() === genre)).map((film) => film.id);
  return found;
};

const useSelectFilmsArray = (genre, isUpperCase) => useSelector(({FILMS}) => selectFilmsArray(FILMS, genre, isUpperCase), shallowEqual);

export {selectFilmsArray, useSelectFilmsArray}
;
