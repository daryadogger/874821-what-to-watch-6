import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import CardsListView from './cards-list-view';
import * as M from '../../store/hooks/use-select-film-for-card';

describe(`Поведение компонента 'CardsListView'`, () => {
  it(`Отображает компонент, если в пропс переданы нужные данные`, () => {
    const idArray = [1, 2];
    const onActiveFilmChange = jest.fn();
    const filmsUrl = ``;
    const activeFilmId = 1;
    const isButtonHidden = false;
    const onShowMore = jest.fn();
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
    const filmId = 42;

    const history = createMemoryHistory();
    const mockStore = configureStore([]);
    const store = mockStore({FILMS: [data]});
    M.useSelectFilmForCard = jest.fn(()=>filmId);
    const {container} = render(
        <Provider store={store}>
          <Router history={history}>
            <CardsListView idArray={idArray} onActiveFilmChange={onActiveFilmChange} filmsUrl={filmsUrl} activeFilmId={activeFilmId} isButtonHidden={isButtonHidden} onShowMore={onShowMore} />
          </Router>
        </Provider>
    );

    const elements = container.querySelector(`.small-movie-card`);

    expect(elements).toBeInTheDocument();

  });
});
