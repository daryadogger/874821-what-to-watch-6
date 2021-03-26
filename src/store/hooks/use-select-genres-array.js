import {shallowEqual, useSelector} from "react-redux";

const selectGenresArray = (FILMS) => {
  const found = [...new Set(FILMS.map((film) => film.genre))];
  return found;
};

const useSelectGenresArray = () => useSelector(({FILMS}) => selectGenresArray(FILMS), shallowEqual);

export {selectGenresArray, useSelectGenresArray};
