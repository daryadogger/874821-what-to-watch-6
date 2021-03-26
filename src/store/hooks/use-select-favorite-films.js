import {shallowEqual, useSelector} from "react-redux";

const selectFavoriteFilms = (FILMS) => {
  const found = FILMS.filter((el) => el.isFavorite === true);
  return found;
};

const useSelectFavoriteFilms = () => useSelector(({FILMS}) => selectFavoriteFilms(FILMS), shallowEqual);

export {selectFavoriteFilms, useSelectFavoriteFilms};
