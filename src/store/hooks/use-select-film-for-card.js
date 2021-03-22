import {shallowEqual, useSelector} from "react-redux";

const selectFilmForCard = (FILMS, id) => {
  const found = FILMS.films.find((el) => el.id === id);
  if (typeof (found) === `undefined`) {
    return undefined;
  }
  const {name, previewVideoLink, previewImage} = found;
  return {name, previewVideoLink, previewImage};
};

const useSelectFilmForCard = (id) => useSelector(({FILMS}) => selectFilmForCard(FILMS, id), shallowEqual);

export {selectFilmForCard, useSelectFilmForCard};
