import {selectFilmForCard} from "./use-select-film-for-card";

describe(`Поведение селектора 'selectFilmForCard'`, () => {
  it(`Вызывает исключение, если аргумент undefined`, () => {
    expect(() => {
      selectFilmForCard(undefined);
    }).toThrow();
  });

  it(`Возвращает name, previewVideoLink, previewImage из объектов в массиве по id`, () => {
    const id = 42;
    const film = {
      id: 42,
      name: ``,
      previewVideoLink: ``,
      previewImage: ``
    };
    const arr = [film];
    const resultObject = {
      name: ``,
      previewVideoLink: ``,
      previewImage: ``
    };

    const result = selectFilmForCard(arr, id);

    expect(result).toEqual(resultObject);
  });
});
