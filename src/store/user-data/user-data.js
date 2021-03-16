import {ActionType} from '../action';

const initialState = {
  userProfile: {},
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        userProfile: action.payload
      };

    default:
      return state;
  }
};

export {userData};
