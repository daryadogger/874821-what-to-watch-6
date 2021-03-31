import {selectGenresArray} from "./use-select-genres-array";

describe(`Поведение селектора 'selectGenresArray'`, () => {
  it(`Возвращает массив объектов по id фильма`, () => {
    const genres = [`Comedy`, `Drama`];
    const arr = [{genre: `Comedy`}, {genre: `Drama`}];

    const result = selectGenresArray(arr);

    expect(result).toEqual(genres);
  });
});
