import {commentsData} from "./comments-data";

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(commentsData(undefined, {}))
      .toEqual({comments: [], postedComment: {}});
  });

});
