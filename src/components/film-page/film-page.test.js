import React from 'react';
import {render} from '@testing-library/react';
import * as M from '../../store/hooks/use-select-film';
import R from 'react-router';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {Page, Tab} from '../../const';
import FilmPage from './film-page';
import ShallowRenderer from 'react-test-renderer/shallow';
import FilmPageFrame from '../film-page-frame/film-page-frame';

describe(`Поведение компонента 'FilmPage'`, () => {
  it(`Возвращает not-found, если фильма нет в хранилище`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({FILMS: []});
    const history = createMemoryHistory();
    render(
        <Provider store={store}>
          <R.Router history={history}>
            <FilmPage />
          </R.Router>
        </Provider>
    );

    expect(history.location.pathname).toBe(Page.NOT_FOUND_PAGE);
  });

  it(`Возвращает компонент 'FilmPage', если фильм есть в хранилище`, () => {
    const data = {
      id: 42,
      name: `The Grand Budapest Hotel`,
      posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
      previewImage: `img/the-grand-budapest-hotel.jpg`,
      backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
      backgroundColor: `#ffffff`,
      videoLink: `https://some-link`,
      previewVideoLink: `https://some-link`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      rating: 8.9,
      scoresCount: 240,
      director: `Wes Andreson`,
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
      runTime: 99,
      genre: `Comedy`,
      released: 2014,
      isFavorite: false
    };
    M.useSelectFilm = jest.fn(()=>data);
    R.useParams = jest.fn(()=>({tab: Tab.DETAILS, id: 42}));
    const renderer = new ShallowRenderer();
    const result = renderer.render(
        <FilmPage />
    );

    expect(result.type).toBe(FilmPageFrame);
  });
});
