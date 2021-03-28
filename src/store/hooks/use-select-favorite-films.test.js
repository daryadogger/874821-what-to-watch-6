import {selectFavoriteFilms} from "./use-select-favorite-films";


describe(`Поведение селектора 'selectFavoriteFilms'`, () => {
  it(`Вызывает исключение, если аргумент undefined`, () => {
    expect(() => {
      selectFavoriteFilms(undefined);
    }).toThrow();
  });

  it(`Отбирает те объекты, у которых isFavorite: true`, () => {
    const arr = [{
      isFavorite: true
    }];

    const result = selectFavoriteFilms(arr).length;

    expect(result).toBe(1);
  });

  it(`Отбрасывает те объекты, у которых isFavorite: false`, () => {
    const arr = [{
      isFavorite: false
    }];

    const result = selectFavoriteFilms(arr).length;

    expect(result).toBe(0);
  });

  it(`Отбрасывает те объекты, у которых нет ключа isFavorite`, () => {
    const arr = [{}];

    const result = selectFavoriteFilms(arr).length;

    expect(result).toBe(0);
  });
});
