import {getCommentsById} from "../action";

describe(`Поведение getCommentsById`, () => {
  it(`Получает объект, состоящий из полей и возвращает объект как payload`, () => {
    const data = {
      [1]: [``]
    };

    const result = getCommentsById(data);

    expect(result.payload).toEqual(data);
  });
});
