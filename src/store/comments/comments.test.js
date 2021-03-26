import {getCommentsById} from "../action";
import {comments} from "./comments";

describe(`Редьюсер раздела 'комментарии к фильму'`, () => {
  it(`Добавит комментарии к фильму 42, если их еще нет в хранилище`, () => {
    const current = {};
    const newComments = [``];
    const filmId = `42`;
    const action = getCommentsById({[filmId]: newComments});
    const result = comments(current, action);

    expect(result.hasOwnProperty(filmId)).toBe(true);
  });

  it(`Заменит комментарии к фильму 42, если там они уже есть`, () => {
    const filmId = `42`;
    const oldComments = [``];
    const current = {[filmId]: oldComments};
    const newComments = [``];
    const action = getCommentsById({[filmId]: newComments});
    const result = comments(current, action);

    expect(result[filmId]).toBe(newComments);
  });

});
