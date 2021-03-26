import {shallowEqual, useSelector} from "react-redux";

const selectError = (ERROR) => {
  const found = ERROR;

  if (typeof (found) === `undefined` || typeof (found.errorText) === `undefined`) {
    return undefined;
  }

  const {errorText, url} = found;
  return {errorText, url};
};

const useSelectError = () => useSelector(({ERROR}) => selectError(ERROR), shallowEqual);

export {selectError, useSelectError};
