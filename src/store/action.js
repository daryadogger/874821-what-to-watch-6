export const ActionType = {
  GET_FILMS_LIST: `main/getFilmsList`,
  GET_COMMENTS_BY_ID: `film-page/getComments`,
  GET_PROMO_FILM: `main/getPromoFilm`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  GET_FAVORITE_FILMS: `myList/getFavoriteFilms`,
  POST_COOMENT: `addReview/postComment`
};

export const getFilmsList = (payload) => ({
  type: ActionType.GET_FILMS_LIST,
  payload
});

export const getCommentsById = (payload) => ({
  type: ActionType.GET_COMMENTS_BY_ID,
  payload
});

export const getPromoFilm = (payload) => ({
  type: ActionType.GET_PROMO_FILM,
  payload
});

export const requiredAuthorization = (payload) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload
});

export const getFavoriteFilms = (payload) => ({
  type: ActionType.GET_FAVORITE_FILMS,
  payload
});

export const postComment = (payload) => ({
  type: ActionType.POST_COOMENT,
  payload
});
