import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import MyListPage from './my-list-page';

describe(`Поведение компонента 'MyListPage'`, () => {
  it(`Отображает компонент, если в хранилище уже загружены нужные данные`, () => {
    const data = {
      id: 1,
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
      isFavorite: true
    };

    const mockStore = configureStore([]);
    const store = mockStore({FILMS: [data], USER: {id: 1}});
    const history = createMemoryHistory();
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <MyListPage />
          </Router>
        </Provider>
    );

    const titleElement = getByText(`My list`);
    const textElement = getByText(`Catalog`);

    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  it(`Отображает компонент загрузки, если в хранилище еще не загружены нужные данные`, () => {
    const mockStore = configureStore([]);
    const store = mockStore({FILMS: []});
    const history = createMemoryHistory();
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <MyListPage />
          </Router>
        </Provider>
    );

    const titleElement = getByText(`Loading...`);

    expect(titleElement).toBeInTheDocument();
  });

});
