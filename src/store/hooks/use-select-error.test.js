import {selectError} from "./use-select-error";

describe(`Поведение селектора 'selectError'`, () => {
  it(`Возвращает errorText и url из объекта ошибки`, () => {
    const error = {
      errorText: ``,
      url: ``
    };

    const result = selectError(error);

    expect(result).toEqual(error);
  });

  it(`Возвращает undefined, если значение error undefined`, () => {
    const error = undefined;
    const resultValue = undefined;

    const result = selectError(error);

    expect(result).toEqual(resultValue);
  });
});
