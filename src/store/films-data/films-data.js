import {ActionType} from '../action';

const initialState = {
  films: [],
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS_LIST:
      return {
        ...state,
        films: action.payload
      };

    default:
      return state;
  }
};

export {filmsData};
