export const ActionType = {
  GET_FILMS_LIST: `main/getFilmsList`
};

export const ActionCreator = {
  getFilmsList: (payload) => ({
    type: ActionType.GET_FILMS_LIST,
    payload
  })
};
