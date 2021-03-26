import {useSelector} from "react-redux";

const useFilmsLoaded = () => {
  return useSelector(({FILMS}) => FILMS.length > 0);
};

export default useFilmsLoaded;
