import {ActionType} from '../action';

const initialState = {};

const promoFilm = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_PROMO_FILM:
      return action.payload;

    default:
      return state;
  }
};

export {promoFilm};
