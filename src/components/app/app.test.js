import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';

describe(`Тестирование маршрутов`, () => {
  it(`Отображает 'LoadingScreen', если в хранилище еще не пришли данные о фильмах`, () => {
    const history = createMemoryHistory();
    const mockStore = configureStore([]);
    const store = mockStore({
      FILMS: [],
      USER: {}
    });
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );
    expect(getByText(`Loading...`)).toBeInTheDocument();
  });

  it(`Отображает 'MainPage', когда пользователь перешел на '/' url и данные загрузились в хранилище`, () => {
    const history = createMemoryHistory();
    const mockStore = configureStore([]);
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
    const store = mockStore({
      FILMS: [data],
      USER: {},
      PROMO: {id: 2, name: ``, videoLink: ``, backgroundImage: ``, genre: `Comedy`, released: 2001, previewImage: ``, posterImage: ``}
    });
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(getByText(`Catalog`)).toBeInTheDocument();
    expect(getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
  });

  it(`Отображает 'SignInPage', когда неавторизованный пользователь перешел на '/login' url`, () => {
    const history = createMemoryHistory();
    const mockStore = configureStore([]);
    const store = mockStore({
      FILMS: [{id: 1}, {id: 2}],
      USER: {}
    });
    history.push(`/login`);
    const {getByLabelText} = render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );
    expect(getByLabelText(`Email address`)).toBeInTheDocument();
    expect(getByLabelText(`Password`)).toBeInTheDocument();
  });

  it(`Отображает 'MyListPge', когда авторизованный пользователь перешел на '/mylist' url`, () => {
    const history = createMemoryHistory();
    const mockStore = configureStore([]);
    const store = mockStore({
      FILMS: [{id: 42, name: ``, videoLink: ``, backgroundImage: ``, isFavorite: true, previewVideoLink: ``, previewImage: ``}],
      USER: {id: 1}
    });

    history.push(`/mylist`);
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(getByText(`My list`)).toBeInTheDocument();
    expect(getByText(`Catalog`)).toBeInTheDocument();
  });

  it(`Отображает 'Player', когда авторизированный пользователь перешел на '/films/:id/review' url`, () => {
    const history = createMemoryHistory();
    const mockStore = configureStore([]);
    const store = mockStore({
      FILMS: [{id: 42, name: ``, backgroundImage: ``}],
      USER: {id: 1}
    });

    history.push(`/films/42/review`);

    const {getByText, getByPlaceholderText} = render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(getByText(`Post`)).toBeInTheDocument();
    expect(getByPlaceholderText(`Review text`)).toBeInTheDocument();
  });

  it(`Отображает 'FilmPage', когда пользователь перешел на '/films/:id' url`, () => {
    const history = createMemoryHistory();
    const mockStore = configureStore([]);
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
    const store = mockStore({
      FILMS: [data],
      USER: {id: 1}
    });

    history.push(`/films/42`);
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(getByText(`More like this`)).toBeInTheDocument();
  });

  it(`Отображает 'MainPage' c выбранным жанром, когда пользователь перешел на '/catalog/:genre' url`, () => {
    const history = createMemoryHistory();
    const mockStore = configureStore([]);
    const store = mockStore({
      FILMS: [{id: 42, name: ``, videoLink: ``, backgroundImage: ``, genre: `Comedy`, previewImage: ``, previewVideoLink: ``}],
      USER: {},
      PROMO: {id: 2, name: ``, videoLink: ``, backgroundImage: ``, genre: `Comedy`, released: 2001, previewImage: ``, posterImage: ``}
    });
    history.push(`/catalog/comedy`);
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(getByText(`Catalog`)).toBeInTheDocument();
  });

  it(`Отображает 'Player', когда пользователь перешел на '/player/:id' url`, () => {
    const history = createMemoryHistory();
    const mockStore = configureStore([]);
    const store = mockStore({
      FILMS: [{id: 42, name: ``, videoLink: ``, backgroundImage: ``}],
      USER: {}
    });

    history.push(`/player/42`);
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(getByText(`Exit`)).toBeInTheDocument();
  });

  it(`Отображает 'NotFoundScreen', когда пользователь перешел на несуществующий маршрут`, () => {
    const history = createMemoryHistory();
    const mockStore = configureStore([]);
    const store = mockStore(
        {
          FILMS: [{label: ``, id: 1, name: `name`, previewVideoLink: `/`, genre: `a`}],
          USER: {}
        });
    history.push(`/non-existent-path`);
    const {getByText} = render(
        <Provider store = {store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>);

    expect(getByText(`404. Page not found`)).toBeInTheDocument();
    expect(getByText(`Вернуться на главную`)).toBeInTheDocument();
  });
});
