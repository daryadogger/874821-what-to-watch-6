import {shallowEqual, useSelector} from "react-redux";

export const selectFilmForAddReview = (FILMS, id) => {
  const found = FILMS.find((el) => el.id === id);

  if (typeof found === `undefined`) {
    return null;
  }

  const {backgroundImage, name, posterImage} = found;
  return {backgroundImage, name, posterImage};
};

export const useSelectFilmForAddReview = (id) => useSelector(({FILMS}) => selectFilmForAddReview(FILMS, id), shallowEqual);
