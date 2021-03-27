import {getError} from "../action";

describe(`Поведение getError`, () => {
  it(`Получает объект, состоящий из полей и возвращает объект как payload`, () => {
    const data = {
      errorText: ``,
      url: ``
    };

    const result = getError(data);

    expect(result.payload).toEqual(data);
  });
});
