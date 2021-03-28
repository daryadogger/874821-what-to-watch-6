import {shallowEqual, useSelector} from "react-redux";

const selectComments = (COMMENTS, id) => {
  const found = COMMENTS[id];
  return found;
};

const useSelectComments = (id) => useSelector(({COMMENTS}) => selectComments(COMMENTS, id), shallowEqual);

export {selectComments, useSelectComments};
