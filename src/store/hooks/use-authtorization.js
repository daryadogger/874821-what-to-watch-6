import {useSelector} from "react-redux";

export const selectAuthtorization = (USER) => {
  return typeof USER.id !== `undefined`;
};

export const useAuthtorization = () => useSelector(({USER}) => selectAuthtorization(USER));
