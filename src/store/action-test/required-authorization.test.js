import {requiredAuthorization} from "../action";

describe(`Поведение requiredAuthorization`, () => {
  it(`Получает объект, состоящий из полей и возвращает объект как payload`, () => {
    const data = {
      id: 1,
      email: `Oliver.conner@gmail.com`,
      name: `Oliver.conner`,
      avatarUrl: `img/1.png`
    };

    const result = requiredAuthorization(data);

    expect(result.payload).toEqual(data);
  });
});
