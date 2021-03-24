import {getFilmsList, getCommentsById, getPromoFilm, requiredAuthorization, getFavoriteFilms, postComment, changeFavoriteStatus, getError, ActionType} from '../store/action';

describe(`Action creators work correctly`, () => {
  it(`Action creator 'getFilmsList' returns correct action with payload`, () => {
    const filmsArr = [];

    const expectedAction = {
      type: ActionType.GET_FILMS_LIST,
      payload: filmsArr,
    };

    expect(getFilmsList(filmsArr)).toEqual(expectedAction);
  });

  it(`Action creator 'getCommentsById' returns correct action with payload`, () => {
    const comments = [];

    const expectedAction = {
      type: ActionType.GET_COMMENTS_BY_ID,
      payload: {id: comments},
    };

    expect(getCommentsById({id: comments})).toEqual(expectedAction);
  });

  it(`Action creator 'getPromoFilm' returns correct action with payload`, () => {
    const promoFilm = {};

    const expectedAction = {
      type: ActionType.GET_PROMO_FILM,
      payload: promoFilm,
    };

    expect(getPromoFilm(promoFilm)).toEqual(expectedAction);
  });

  it(`Action creator 'requiredAuthorization' returns correct action with payload`, () => {
    const userProfile = {};

    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: userProfile,
    };

    expect(requiredAuthorization(userProfile)).toEqual(expectedAction);
  });

  it(`Action creator 'getFavoriteFilms' returns correct action with payload`, () => {
    const favoriteFilms = [];

    const expectedAction = {
      type: ActionType.GET_FAVORITE_FILMS,
      payload: favoriteFilms,
    };

    expect(getFavoriteFilms(favoriteFilms)).toEqual(expectedAction);
  });

  it(`Action creator 'postComment' returns correct action with payload`, () => {
    const postedComment = {};

    const expectedAction = {
      type: ActionType.POST_COMMENT,
      payload: postedComment,
    };

    expect(postComment(postedComment)).toEqual(expectedAction);
  });

  it(`Action creator 'changeFavoriteStatus' returns correct action with payload`, () => {
    const films = [];

    const expectedAction = {
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: films,
    };

    expect(changeFavoriteStatus(films)).toEqual(expectedAction);
  });

  it(`Action creator 'getError' returns correct action with payload`, () => {
    const error = {};

    const expectedAction = {
      type: ActionType.GET_ERROR,
      payload: error,
    };

    expect(getError(error)).toEqual(expectedAction);
  });

});
