import {selectFilmForPlayer} from "./use-select-film-for-player";


describe(`Поведение селектора 'selectFilmForPlayer'`, () => {
  it(`Вызывает исключение, если аргумент undefined`, () => {
    expect(() => {
      selectFilmForPlayer(undefined);
    }).toThrow();
  });

  it(`Возвращает объект с данным id`, () => {
    const id = 42;
    const film = {id: 42};
    const arr = [film, {id: 43}];

    const result = selectFilmForPlayer(arr, id);

    expect(result).toEqual(film);
  });
});
