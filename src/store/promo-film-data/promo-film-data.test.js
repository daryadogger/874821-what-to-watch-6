import {promoFilmData} from "./promo-film-data";

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(promoFilmData(undefined, {}))
      .toEqual({promoFilm: {}});
  });

});
