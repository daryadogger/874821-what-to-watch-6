import {userData} from "./user-data";

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(userData(undefined, {}))
      .toEqual({userProfile: {}});
  });

});
