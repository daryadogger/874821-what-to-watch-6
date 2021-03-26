import {shallowEqual, useSelector} from "react-redux";

const selectFavoriteStatus = (FILMS, id) => {
  const found = FILMS.find((el) => el.id === id).isFavorite;
  return found;
};

const useSelectFavoriteStatus = (id) => useSelector(({FILMS}) => selectFavoriteStatus(FILMS, id), shallowEqual);

export {selectFavoriteStatus, useSelectFavoriteStatus};
