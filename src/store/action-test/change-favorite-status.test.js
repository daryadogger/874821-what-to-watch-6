import {changeFavoriteStatus} from "../action";

describe(`Поведение changeFavoriteStatus`, () => {
  it(`Получает id фильма и его статус и возвращает id фильма как payload`, () => {
    const filmId = 3;
    const status = 0;

    const result = changeFavoriteStatus(filmId, status);

    expect(result.payload).toEqual(filmId);
  });
});
