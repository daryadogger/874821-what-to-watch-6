import {getFilmsList} from "../action";
import {films} from "./films";

describe(`Редьюсер раздела 'фильмы'`, () => {
  it(`Добавит фильмы, если их еще нет в хранилище`, () => {
    const current = [];
    const newFilms = [{}];
    const action = getFilmsList(newFilms);
    const result = films(current, action);

    expect(result).toBe(newFilms);
  });

  it(`Заменит фильмы, если там они уже есть`, () => {
    const oldFilms = [{}];
    const current = {oldFilms};
    const newFilms = [{}, {}];
    const action = getFilmsList(newFilms);
    const result = films(current, action);

    expect(result).toBe(newFilms);
  });

});

