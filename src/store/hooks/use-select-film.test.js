import {selectFilm} from "./use-select-film";


describe(`Поведение селектора 'selectFilm'`, () => {
  it(`Вызывает исключение, если аргумент undefined`, () => {
    expect(() => {
      selectFilm(undefined);
    }).toThrow();
  });

  it(`Возвращает объект с данным id`, () => {
    const id = 42;
    const film = {id: 42};
    const arr = [film, {id: 43}];

    const result = selectFilm(arr, id);

    expect(result).toEqual(film);
  });
});
