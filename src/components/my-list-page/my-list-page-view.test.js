import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import MyListPageView from './my-list-page-view';

describe(`Поведение компонента 'MyListPageView'`, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.load = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
  });
  it(`Отображает компонент, если в пропс пришли нужные данные`, () => {
    const genre = ``;
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
      isFavorite: false
    };
    const favoriteFilms = [data];

    const mockStore = configureStore([]);
    const store = mockStore({FILMS: [data], USER: {id: 1}});
    const history = createMemoryHistory();
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <MyListPageView favoriteFilms={favoriteFilms} genre={genre} />
          </Router>
        </Provider>
    );

    expect(getByText(`My list`)).toBeInTheDocument();
    expect(getByText(`Catalog`)).toBeInTheDocument();
  });

});
