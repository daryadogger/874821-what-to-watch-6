import {shallowEqual, useSelector} from "react-redux";

export const selectAuth = (USER) => {
  const found = USER;
  if (typeof (found) === `undefined`) {
    return undefined;
  }
  const {id} = found;
  return {id};
};

export const useSelectAuth = () => useSelector(({USER}) => selectAuth(USER), shallowEqual);
