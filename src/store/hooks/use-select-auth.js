import {shallowEqual, useSelector} from "react-redux";

const selectAuth = (USER) => {
  const found = USER.userProfile;
  if (typeof (found) === `undefined`) {
    return undefined;
  }
  const {id} = found;
  return {id};
};

const useSelectAuth = () => useSelector(({USER}) => selectAuth(USER), shallowEqual);

export {selectAuth, useSelectAuth};
