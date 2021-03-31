import React from 'react';
import * as M from '../../store/hooks/use-select-favorite-status';
import * as redux from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import FavoriteButton from './favorite-button';

describe(`Поведение компонента 'FavoriteButton'`, () => {
  it(`Отображает кнопку`, () => {
    M.useSelectFavoriteStatus = jest.fn(()=> true);
    redux.useDispatch = jest.fn();
    const id = 42;

    const renderer = new ShallowRenderer();
    const result = renderer.render(
        <FavoriteButton id={id} />
    );

    expect(result.type).toBe(`button`);
  });
});
