import {ActionType} from '../store/action';
import AuthorizationStatus from '../const';

const initialState = {
  genre: ``,
  films: [],
  comments: [],
  film: {},
  promoFilm: {},
  favoriteFilms: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS_LIST:
      return {
        ...state,
        films: action.payload
      };

    case ActionType.GET_COMMENTS_BY_ID:
      return {
        ...state,
        comments: action.payload
      };

    case ActionType.GET_FILM_BY_ID:
      return {
        ...state,
        film: action.payload
      };

    case ActionType.GET_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };

    case ActionType.GET_FAVORITE_FILMS:
      return {
        ...state,
        favoriteFilms: action.payload
      };

    default:
      return state;
  }
};

export {reduser};
