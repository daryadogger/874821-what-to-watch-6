import {selectComments} from "./use-select-comments";

describe(`Поведение селектора 'selectComments'`, () => {
  it(`Возвращает массив объектов по id фильма`, () => {
    const filmId = 1;
    const element = {filmId: 1};
    const coments = [element, {}];
    const object = {[filmId]: coments};

    const result = selectComments(object, filmId);

    expect(result).toBe(coments);
  });
});
