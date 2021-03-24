import {errorData} from "./error-data";

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(errorData(undefined, {}))
      .toEqual({error: {}});
  });

});
