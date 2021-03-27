import {shallowEqual, useSelector} from "react-redux";

const selectFilm = (FILMS, id) => {
  const found = FILMS.find((el) => el.id === id);
  return found;
};

const useSelectFilm = (id) => useSelector(({FILMS}) => selectFilm(FILMS, id), shallowEqual);

export {selectFilm, useSelectFilm};
