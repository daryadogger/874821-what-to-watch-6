import {ActionType} from '../action';

const initialState = {
  promoFilm: {},
};

const promoFilmData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload
      };

    default:
      return state;
  }
};

export {promoFilmData};
