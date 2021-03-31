import {selectFilmsLoaded} from "./use-films-loaded";

describe(`Поведение селектора 'selectFilmsLoaded'`, () => {
  it(`Возвращает true, если в хранилище есть фильмы`, () => {
    const arr = [{}];

    const result = selectFilmsLoaded(arr);

    expect(result).toBe(true);
  });

  it(`Возвращает true, если в хранилище есть фильмы`, () => {
    const arr = [];

    const result = selectFilmsLoaded(arr);

    expect(result).toBe(false);
  });
});
