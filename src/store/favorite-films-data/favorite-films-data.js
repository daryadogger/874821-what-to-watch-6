import {ActionType} from '../action';

const initialState = {
  favoriteFilms: [],
  favoriteStatus: {},
};

const favoriteFilmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FAVORITE_FILMS:
      return {
        ...state,
        favoriteFilms: action.payload
      };

    case ActionType.CHANGE_FAVORITE_STATUS:
      return {
        ...state,
        favoriteStatus: action.payload
      };

    default:
      return state;
  }
};

export {favoriteFilmsData};
