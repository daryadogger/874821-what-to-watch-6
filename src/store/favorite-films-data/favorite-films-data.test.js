import {favoriteFilmsData} from "./favorite-films-data";

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(favoriteFilmsData(undefined, {}))
      .toEqual({favoriteFilms: []});
  });

});
