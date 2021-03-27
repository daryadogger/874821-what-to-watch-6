import {shallowEqual, useSelector} from "react-redux";

const selectFilmForAddReview = (FILMS, id) => {
  const found = FILMS.find((el) => el.id === id);

  const {backgroundImage, name, posterImage} = found;
  return {backgroundImage, name, posterImage};
};

const useSelectFilmForAddReview = (id) => useSelector(({FILMS}) => selectFilmForAddReview(FILMS, id), shallowEqual);

export {selectFilmForAddReview, useSelectFilmForAddReview};
