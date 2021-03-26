import {ActionType} from '../action';

const initialState = {};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_COMMENTS_BY_ID:
      return {
        ...state, ...action.payload
      };

    default:
      return state;
  }
};

export {comments};
