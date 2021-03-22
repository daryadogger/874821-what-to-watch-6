import {shallowEqual, useSelector} from "react-redux";

const selectFilmForPlayer = (FILMS, id) => {
  const found = FILMS.films.find((el) => el.id === id);
  return found;
};

const useSelectFilmForPlayer = (id) => useSelector(({FILMS}) => selectFilmForPlayer(FILMS, id), shallowEqual);

export {selectFilmForPlayer, useSelectFilmForPlayer};
