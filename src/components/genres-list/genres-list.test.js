import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import GenresList from './genres-list';

describe(`Поведение компонента 'GenresList'`, () => {
  it(`Фильтрует фильмы из хранилища по жанру`, () => {
    const genre = `Comedy`;
    const data = [
      {genre: `Comedy`},
      {genre: `Drama`},
    ];

    const mockStore = configureStore([]);
    const store = mockStore({FILMS: data});
    const history = createMemoryHistory();
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <GenresList genre={genre} />
          </Router>
        </Provider>
    );

    expect(getByText(genre)).toBeInTheDocument();
  });


});
