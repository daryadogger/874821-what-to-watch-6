import React from 'react';
import * as M from '../../store/hooks/use-select-films-array';
import ShallowRenderer from 'react-test-renderer/shallow';
import CardsList from './cards-list';
import CardsListView from './cards-list-view';

describe(`Поведение компонента 'CardsList'`, () => {
  it(`Отображает компонент`, () => {
    M.useSelectFilmsArray = jest.fn(()=> [42]);
    const genre = ``;
    const enableButton = false;
    const initialCount = 8;
    const isUpperCase = true;
    const currentFilmId = 42;
    const favoriteFilms = [];

    const renderer = new ShallowRenderer();
    const result = renderer.render(
        <CardsList genre={genre} enableButton={enableButton} initialCount={initialCount} isUpperCase={isUpperCase} currentFilmId={currentFilmId} favoriteFilms={favoriteFilms} />
    );

    expect(result.type).toBe(CardsListView);
  });
});
