import {selectAuth} from "./use-select-auth";

describe(`Поведение селектора 'selectAuth'`, () => {
  it(`Возвращает name, backgroundImage, posterImage из объектов в массиве по id`, () => {
    const user = {
      id: 42,
      login: ``
    };
    const resultObject = {id: 42};

    const result = selectAuth(user);

    expect(result).toEqual(resultObject);
  });
});
