import React from 'react';
import {render} from '@testing-library/react';
import * as M from '../../store/hooks/use-select-promo-film';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import ShallowRenderer from 'react-test-renderer/shallow';
import PromoFilm from './promo-film';
import PromoFilmView from './promo-film-view';
// import PromoFilmView from './promo-film-view';

describe(`Поведение компонента 'PromoFilm'`, () => {
  it(`Отображает Loading компонент, если данных о промо-фильме еще нет в хранилище`, () => {
    const mockStore = configureStore([]);
    const store = mockStore({PROMO: []});
    const history = createMemoryHistory();
    M.useSelectPromoFilm = jest.fn(()=> ({}));
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <PromoFilm />
          </Router>
        </Provider>
    );

    expect(getByText(`Loading...`)).toBeInTheDocument();
  });

  it(`Отображает промо-фильм, если он есть в хранилище`, () => {
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
    M.useSelectPromoFilm = jest.fn(()=> data);
    redux.useDispatch = jest.fn();

    const renderer = new ShallowRenderer();
    const result = renderer.render(
        <PromoFilm />
    );

    expect(result.type).toBe(PromoFilmView);
  });
});

