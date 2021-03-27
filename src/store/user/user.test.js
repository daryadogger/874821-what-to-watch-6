import {requiredAuthorization} from "../action";
import {user} from "./user";

describe(`Редьюсер информации о пользователе`, () => {
  it(`Добавит информацию о пользователе в хранилище, если ее там нет`, () => {
    const current = {};
    const newUser = {};
    const action = requiredAuthorization(newUser);
    const result = user(current, action);

    expect(result).toBe(newUser);
  });

  it(`Заменит информацию о пользователе, если она там уже есть`, () => {
    const oldUser = {};
    const current = oldUser;
    const newUser = {};
    const action = requiredAuthorization(newUser);
    const result = user(current, action);

    expect(result).toBe(newUser);
  });

});
