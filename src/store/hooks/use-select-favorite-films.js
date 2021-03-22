import {shallowEqual, useSelector} from "react-redux";

const selectFavoriteFilms = (FAVORITES) => {
  const found = FAVORITES.favoriteFilms;
  return found;
};

const useSelectFavoriteFilms = () => useSelector(({FAVORITES}) => selectFavoriteFilms(FAVORITES), shallowEqual);

export {selectFavoriteFilms, useSelectFavoriteFilms};
