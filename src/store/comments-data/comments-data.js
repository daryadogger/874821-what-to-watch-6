import {ActionType} from '../action';

const initialState = {
  comments: {},
  postedComment: {}
};

const commentsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_COMMENTS_BY_ID:
      return {
        ...state,
        comments: {...state.comments, ...action.payload}
      };

    case ActionType.POST_COMMENT:
      return {
        ...state,
        postedComment: action.payload
      };

    default:
      return state;
  }
};

export {commentsData};
