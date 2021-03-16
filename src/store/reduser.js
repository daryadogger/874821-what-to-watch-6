import {ActionType} from '../store/action';

const initialState = {
  genre: ``,
  films: [],
  comments: {},
  promoFilm: {},
  favoriteFilms: [],
  favoriteStatus: {},
  userProfile: {},
  postedComment: {}
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
        comments: {...state.comments, ...action.payload}
      };

    case ActionType.GET_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        userProfile: action.payload
      };

    case ActionType.GET_FAVORITE_FILMS:
      return {
        ...state,
        favoriteFilms: action.payload
      };

    case ActionType.POST_COMMENT:
      return {
        ...state,
        postedComment: action.payload
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

export {reduser};
