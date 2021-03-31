import {shallowEqual, useSelector} from "react-redux";

export const selectPromoFilm = (PROMO) => {
  const found = PROMO;
  return found;
};

export const useSelectPromoFilm = () => useSelector(({PROMO}) => selectPromoFilm(PROMO), shallowEqual);
