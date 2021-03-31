import {useSelector} from "react-redux";

export const selectFilmsLoaded = (FILMS) => {
  return FILMS.length > 0;
};

export const useFilmsLoaded = () => useSelector(({FILMS}) => selectFilmsLoaded(FILMS));
