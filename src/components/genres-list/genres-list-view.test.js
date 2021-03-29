import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import GenresListView from './genres-list-view';

describe(`Поведение компонента 'GenresListView'`, () => {
  it(`Отображает компонент, если в пропс пришли нужные данные`, () => {
    const genre = `Genre`;
    const genresArray = [];

    const history = createMemoryHistory();
    const {container} = render(
        <Router history={history}>
          <GenresListView genresArray={genresArray} genre={genre} />
        </Router>
    );

    const textElement = container.querySelector(`.catalog__genres-list`);

    expect(textElement).toBeInTheDocument();
  });

});
