import {ActionType} from '../store/action';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  genre: ``,
  films: [],
  comments: [],
  film: {},
  promoFilm: {},
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
        comments: action.payload
      };

    case ActionType.GET_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload
      };

    case ActionType.CHECK_AUTH:
      return {
        ...state,
        authorizationStatus: action.payload
      };

    default:
      return state;
  }
};

export {reduser};
