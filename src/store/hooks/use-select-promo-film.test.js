import {selectPromoFilm} from "./use-select-promo-film";

describe(`Поведение селектора 'selectPromoFilm'`, () => {
  it(`Возвращает объект фильма`, () => {
    const film = {};

    const result = selectPromoFilm(film);

    expect(result).toBe(film);
  });
});
