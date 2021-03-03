import {ActionType} from '../store/action';

const initialState = {
  genre: ``,
  films: []
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GENRE_CHANGE:
      return {
        ...state,
        genre: action.payload
      };

    case ActionType.GET_FILMS_LIST:
      return {
        ...state,
        films: action.payload
      };

    default:
      return state;
  }
};

export {reduser};
