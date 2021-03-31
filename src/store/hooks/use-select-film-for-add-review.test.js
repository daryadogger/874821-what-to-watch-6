import {selectFilmForAddReview} from "./use-select-film-for-add-review";

describe(`Поведение селектора 'selectFilmForAddReview'`, () => {
  it(`Вызывает исключение, если аргумент undefined`, () => {
    expect(() => {
      selectFilmForAddReview(undefined);
    }).toThrow();
  });

  it(`Возвращает name, backgroundImage, posterImage из объектов в массиве по id`, () => {
    const id = 42;
    const film = {
      id: 42,
      name: ``,
      backgroundImage: ``,
      posterImage: ``
    };
    const arr = [film];
    const resultObject = {
      name: ``,
      backgroundImage: ``,
      posterImage: ``
    };

    const result = selectFilmForAddReview(arr, id);

    expect(result).toEqual(resultObject);
  });
});
