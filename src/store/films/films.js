import {ActionType} from '../action';

const initialState = {};

const films = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS_LIST:
      return action.payload;

    case ActionType.CHANGE_FAVORITE_STATUS:
      return {
        ...state, ...action.payload
      };

    default:
      return state;
  }
};

export {films};
