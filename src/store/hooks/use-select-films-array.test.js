import {selectFilmsArray} from "./use-select-films-array";


describe(`Поведение селектора 'selectFilmsArray'`, () => {
  it(`Вызывает исключение, если аргумент undefined`, () => {
    expect(() => {
      selectFilmsArray(undefined);
    }).toThrow();
  });

  it(`Возвращает массив id, если genre в lowerCase`, () => {
    const genre = `comedy`;
    const arr = [{id: 42, genre: `Comedy`}, {id: 43, genre: `Drama`}, {id: 44, genre: `Comedy`}];
    const idArr = [42, 44];

    const result = selectFilmsArray(arr, genre, false);

    expect(result).toEqual(idArr);
  });

  it(`Возвращает массив id, если genre в upperCase`, () => {
    const genre = `comedy`;
    const arr = [{id: 42, genre: `comedy`}, {id: 43, genre: `drama`}, {id: 44, genre: `comedy`}];
    const idArr = [42, 44];

    const result = selectFilmsArray(arr, genre, true);

    expect(result).toEqual(idArr);
  });
});
