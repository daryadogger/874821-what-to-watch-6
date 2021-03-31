import {selectFavoriteStatus} from "./use-select-favorite-status";

describe(`Поведение селектора 'selectFavoriteStatus'`, () => {
  it(`Вызывает исключение, если аргумент undefined`, () => {
    expect(() => {
      selectFavoriteStatus(undefined);
    }).toThrow();
  });

  it(`Возвращает значение ключа isFavorite объекта фильма по id`, () => {
    const id = 42;
    const arr = [{id: 42, isFavorite: true}];
    const resultBool = true;

    const result = selectFavoriteStatus(arr, id);

    expect(result).toEqual(resultBool);
  });
});
