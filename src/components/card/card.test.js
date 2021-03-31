import React from 'react';
import * as M from '../../store/hooks/use-select-film-for-card';
import ShallowRenderer from 'react-test-renderer/shallow';
import Card from './card';
import CardView from './card-view';

describe(`Поведение компонента 'Card'`, () => {
  it(`Отображает компонент`, () => {
    M.useSelectFilmForCard = jest.fn(()=> ({name: ``, previewVideoLink: ``, previewImage: ``}));

    const isActive = true;
    const id = 42;
    const to = ``;
    const onActiveFilmChange = jest.fn();

    const renderer = new ShallowRenderer();
    const result = renderer.render(
        <Card isActive={isActive} id={id} to={to} onActiveFilmChange={onActiveFilmChange} />
    );

    expect(result.type).toBe(CardView);
  });
});
