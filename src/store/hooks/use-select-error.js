import {shallowEqual, useSelector} from "react-redux";

const selectError = (ERROR) => {
  const found = ERROR.error;


  if (typeof (found) === `undefined`) {
    return undefined;
  }

  const {errorText, url} = found;
  return {errorText, url};
};

const useSelectError = () => useSelector(({ERROR}) => selectError(ERROR), shallowEqual);

export {selectError, useSelectError};
