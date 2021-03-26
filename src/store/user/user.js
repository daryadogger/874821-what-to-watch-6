import {ActionType} from '../action';

const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return action.payload;

    default:
      return state;
  }
};

export {user};
