export const ActionType = {
  GET_FILMS_LIST: `main/getFilmsList`,
  GET_COMMENTS_BY_ID: `film-page/getComments`,
  GET_PROMO_FILM: `main/getPromoFilm`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  GET_FAVORITE_FILMS: `myList/getFavoriteFilms`
};

export const ActionCreator = {
  getFilmsList: (payload) => ({
    type: ActionType.GET_FILMS_LIST,
    payload
  }),

  getCommentsById: (payload) => ({
    type: ActionType.GET_COMMENTS_BY_ID,
    payload
  }),

  getPromoFilm: (payload) => ({
    type: ActionType.GET_PROMO_FILM,
    payload
  }),

  requiredAuthorization: (payload) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload
  }),

  getFavoriteFilms: (payload) => ({
    type: ActionType.GET_FAVORITE_FILMS,
    payload
  }),

};
