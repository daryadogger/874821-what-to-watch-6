import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import PromoFilmView from './promo-film-view';

describe(`Поведение компонента 'PromoFilmView'`, () => {
  it(`Отображает компонент, если в пропс пришел объект фильма`, () => {
    const promoFilm = {
      id: 1,
      name: `The Grand Budapest Hotel`,
      posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
      backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
      genre: `Comedy`,
      released: 2014,
    };

    const mockStore = configureStore([]);
    const store = mockStore({USER: {}});
    const history = createMemoryHistory();
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <PromoFilmView promoFilm={promoFilm} />
          </Router>
        </Provider>
    );

    const name = getByText(promoFilm.name);
    const released = getByText(promoFilm.released);
    const genre = getByText(promoFilm.genre);

    expect(name).toBeInTheDocument();
    expect(released).toBeInTheDocument();
    expect(genre).toBeInTheDocument();
  });

  it(`Отображает кнопку 'Добавить к просмотру' в промо-блоке, если пользователь авторизирован`, () => {
    const promoFilm = {
      id: 1,
      name: `The Grand Budapest Hotel`,
      posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
      backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
      genre: `Comedy`,
      released: 2014,
    };

    const mockStore = configureStore([]);
    const store = mockStore({FILMS: [{id: 1, isFavorite: true}], USER: {id: 1}});
    const history = createMemoryHistory();
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <PromoFilmView promoFilm={promoFilm} />
          </Router>
        </Provider>
    );

    expect(getByText(`My list`)).toBeInTheDocument();
  });

  it(`Не отображает кнопку 'Добавить к просмотру' в промо-блоке, если пользователь неавторизирован`, () => {
    const promoFilm = {
      id: 1,
      name: `The Grand Budapest Hotel`,
      posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
      backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
      genre: `Comedy`,
      released: 2014,
    };

    const mockStore = configureStore([]);
    const store = mockStore({USER: {}});
    const history = createMemoryHistory();
    const {queryByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <PromoFilmView promoFilm={promoFilm} />
          </Router>
        </Provider>
    );

    expect(queryByText(`My list`)).not.toBeInTheDocument();
  });

});
