import {filmsData} from "./films-data";

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmsData(undefined, {}))
      .toEqual({films: []});
  });

});
