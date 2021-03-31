import {shallowEqual, useSelector} from "react-redux";

export const selectFavoriteStatus = (FILMS, id) => {
  const found = FILMS.find((el) => el.id === id).isFavorite;
  return found;
};

export const useSelectFavoriteStatus = (id) => useSelector(({FILMS}) => selectFavoriteStatus(FILMS, id), shallowEqual);
