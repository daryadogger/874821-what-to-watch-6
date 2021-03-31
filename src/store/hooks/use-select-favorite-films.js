import {shallowEqual, useSelector} from "react-redux";

export const selectFavoriteFilms = (FILMS) => {
  const found = FILMS.filter((el) => el.isFavorite === true);
  return found;
};

export const useSelectFavoriteFilms = () => useSelector(({FILMS}) => selectFavoriteFilms(FILMS), shallowEqual);
