import {selectAuthtorization} from "./use-authtorization";
describe(`Поведение селектора 'selectAuthtorization'`, () => {
  it(`Возвращает true, если в хранилище есть id user`, () => {
    const user = {id: 1};

    const result = selectAuthtorization(user);

    expect(result).toBe(true);
  });

  it(`Возвращает false, если в хранилище нет id user`, () => {
    const user = {};

    const result = selectAuthtorization(user);

    expect(result).toBe(false);
  });
});
