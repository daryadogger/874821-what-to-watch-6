import {shallowEqual, useSelector} from "react-redux";

export const selectComments = (COMMENTS, id) => {
  const found = COMMENTS[id];
  return found;
};

export const useSelectComments = (id) => useSelector(({COMMENTS}) => selectComments(COMMENTS, id), shallowEqual);
