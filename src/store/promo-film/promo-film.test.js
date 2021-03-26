import {getPromoFilm} from "../action";
import {promoFilm} from "./promo-film";

describe(`Редьюсер промо-фильма`, () => {
  it(`Добавит промо-фильм в хранилище, если его там нет`, () => {
    const current = {};
    const newFilm = {};
    const action = getPromoFilm(newFilm);
    const result = promoFilm(current, action);

    expect(result).toBe(newFilm);
  });

  it(`Заменит промо-фильм, если он там уже есть`, () => {
    const oldFilm = {};
    const current = oldFilm;
    const newFilm = {};
    const action = getPromoFilm(newFilm);
    const result = promoFilm(current, action);

    expect(result).toBe(newFilm);
  });

});
