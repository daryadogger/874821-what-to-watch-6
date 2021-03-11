export const ActionType = {
  GET_FILMS_LIST: `main/getFilmsList`,
  GET_COMMENTS_BY_ID: `film-page/getComments/`,
  GET_FILM_BY_ID: `film-page/getFilm/`,
  GET_PROMO_FILM: `main/getPromoFilm`,
  CHECK_AUTH: `checkAuth`
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

  getFilmById: (payload) => ({
    type: ActionType.GET_FILM_BY_ID,
    payload
  }),

  getPromoFilm: (payload) => ({
    type: ActionType.GET_PROMO_FILM,
    payload
  }),

  checkAuth: (payload) => ({
    type: ActionType.CHECK_AUTH,
    payload
  }),
};
