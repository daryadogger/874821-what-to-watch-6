import {shallowEqual, useSelector} from "react-redux";

export const selectFilmForCard = (FILMS, id) => {
  const found = FILMS.find((el) => el.id === id);
  if (typeof (found) === `undefined`) {
    return undefined;
  }
  const {name, previewVideoLink, previewImage} = found;
  return {name, previewVideoLink, previewImage};
};

export const useSelectFilmForCard = (id) => useSelector(({FILMS}) => selectFilmForCard(FILMS, id), shallowEqual);
