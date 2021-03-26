import {ActionType} from '../action';

const initialState = {};

const error = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ERROR:
      return action.payload;

    default:
      return state;
  }
};

export {error};
