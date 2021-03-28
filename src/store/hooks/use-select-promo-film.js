import {shallowEqual, useSelector} from "react-redux";

const selectPromoFilm = (PROMO) => {
  const found = PROMO;
  return found;
};

const useSelectPromoFilm = () => useSelector(({PROMO}) => selectPromoFilm(PROMO), shallowEqual);

export {selectPromoFilm, useSelectPromoFilm};
