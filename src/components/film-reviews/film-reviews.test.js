import React from 'react';
import {render} from '@testing-library/react';
import * as M from '../../store/hooks/use-select-comments';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import FilmReviews from './film-reviews';

describe(`Поведение компонента 'FilmReviews'`, () => {
  it(`Отображает Loading компонент, если комментариев еще нет в хранилище`, () => {
    const mockStore = configureStore([]);
    const store = mockStore({FILMS: []});
    const history = createMemoryHistory();
    M.useSelectComments = jest.fn(()=> undefined);
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <FilmReviews />
          </Router>
        </Provider>
    );

    expect(getByText(`Loading...`)).toBeInTheDocument();
  });

  // it(`Отображает комментарии к фильму, если он есть в хранилище`, () => {
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

  //   const mockStore = configureStore([]);
  //   const store = mockStore({FILMS: [data]});
  //   const history = createMemoryHistory();
  //   M.useSelectComments = jest.fn(()=> filmId);
  //   const {queryByText} = render(
  //       <Provider store={store}>
  //         <Router history={history}>
  //           <FilmReviews />
  //         </Router>
  //       </Provider>
  //   );

  //   expect(queryByText(`Loading...`)).not.toBeInTheDocument();
  // });
});
