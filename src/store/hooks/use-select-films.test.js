import {selectFilms} from "./use-select-films";

describe(`Поведение селектора 'selectFilms'`, () => {
  it(`Возвращает массив объектов`, () => {
    const arr = [{}, {}];

    const result = selectFilms(arr);

    expect(result).toBe(arr);
  });
});
