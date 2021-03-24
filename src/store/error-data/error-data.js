import {ActionType} from '../action';

const initialState = {
  error: {},
};

const errorData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ERROR:
      return {
        ...state,
        error: {...state.error, ...action.payload}
      };

    default:
      return state;
  }
};

export {errorData};
