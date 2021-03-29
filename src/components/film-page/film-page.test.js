import React from 'react';
import {render} from '@testing-library/react';
// import * as M from '../../store/hooks/use-select-film';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {Pages} from '../../const';
import FilmPage from './film-page';

describe(`Поведение компонента 'FilmPage'`, () => {
  it(`Возвращает not-found, если фильма нет в хранилище`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({FILMS: []});
    const history = createMemoryHistory();
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmPage />
          </Router>
        </Provider>
    );

    expect(history.location.pathname).toBe(Pages.NOT_FOUND_PAGE);
  });

  // it(`Возвращает компонент 'FilmPage', если фильм есть в хранилище`, () => {
  //   const mockStore = configureStore([]);
  //   const filmId = 42;
  //   const data = {
  //     id: 42,
  //     name: `The Grand Budapest Hotel`,
  //     posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  //     previewImage: `img/the-grand-budapest-hotel.jpg`,
  //     backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
  //     backgroundColor: `#ffffff`,
  //     videoLink: `https://some-link`,
  //     previewVideoLink: `https://some-link`,
  //     description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  //     rating: 8.9,
  //     scoresCount: 240,
  //     director: `Wes Andreson`,
  //     starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  //     runTime: 99,
  //     genre: `Comedy`,
  //     released: 2014,
  //     isFavorite: false
  //   };
  //   const store = mockStore({FILMS: [data], USER: {id: 1}});
  //   const history = createMemoryHistory();
  //   M.useSelectFilm = jest.fn(()=>filmId);
  //   render(
  //       <Provider store={store}>
  //         <Router history={history}>
  //           <FilmPage />
  //         </Router>
  //       </Provider>
  //   );

  //   expect(history.location.pathname).toBe(Pages.hrefToFilm(data.id));
  // });
});
