import {getError} from "../action";
import {error} from "./error";

describe(`Редьюсер ошибки`, () => {
  it(`Добавит ошибку в хранилище, если ее там нет`, () => {
    const current = {};
    const newError = {errorText: ``, url: ``};
    const action = getError(newError);
    const result = error(current, action);

    expect(result).toBe(newError);
  });

  it(`Заменит ошибку, если она там уже есть`, () => {
    const oldError = {errorText: ``, url: ``};
    const current = oldError;
    const newError = {errorText: ``, url: ``};
    const action = getError(newError);
    const result = error(current, action);

    expect(result).toBe(newError);
  });

});
