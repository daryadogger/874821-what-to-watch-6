import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmPageFrame from './film-page-frame';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

describe(`Поведение компонента 'FilmPageFrame'`, () => {
  it(`Отображает компонент, если в пропс переданы нужные данные`, () => {
    const posterImage = ``;
    const backgroundImage = ``;
    const name = `Name`;
    const genre = `Comedy`;
    const released = 1990;
    const isFavorite = true;

    const history = createMemoryHistory();
    const mockStore = configureStore([]);
    const store = mockStore({USER: {}, FILMS: [{id: 1, name: ``, genre: `Comedy`, previewVideoLink: ``, previewImage: ``}]});
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <FilmPageFrame posterImage={posterImage} backgroundImage={backgroundImage} name={name} genre={genre} released={released} isFavorite={isFavorite} >
              <div></div>
            </FilmPageFrame>
          </Router>
        </Provider>
    );

    const filmName = getByText(name);
    const filmRelease = getByText(released);
    const filmGenre = getByText(genre);

    expect(filmName).toBeInTheDocument();
    expect(filmRelease).toBeInTheDocument();
    expect(filmGenre).toBeInTheDocument();
  });
});
