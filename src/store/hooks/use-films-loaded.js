import {useSelector} from "react-redux";

const useFilmsLoaded = () => {
  return useSelector(({FILMS}) => FILMS.films.length > 0);
};

export default useFilmsLoaded;
