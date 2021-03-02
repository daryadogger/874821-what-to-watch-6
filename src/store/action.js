export const ActionType = {
  GENRE_CHANGE: `main/ganreChange`,
  GET_FILMS_LIST: `main/getFilmsList`
};

export const ActionCreator = {
  genreChange: (payload) => ({
    type: ActionType.GENRE_CHANGE,
    payload
  }),
  getFilmsList: (payload) => ({
    type: ActionType.GET_FILMS_LIST,
    payload
  })
};
