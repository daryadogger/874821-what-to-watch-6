import {ActionType} from '../action';

const initialState = {
  favoriteFilms: [],
};

const favoriteFilmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FAVORITE_FILMS:
      return {
        ...state,
        favoriteFilms: action.payload
      };

    default:
      return state;
  }
};

export {favoriteFilmsData};
