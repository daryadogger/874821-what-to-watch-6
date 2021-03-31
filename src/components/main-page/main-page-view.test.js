import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import MainPageView from './main-page-view';

describe(`Поведение компонента 'MainPageView'`, () => {
  it(`Отображает компонент, если в пропс передали нужные данные`, () => {
    const filmGenre = ``;
    const initialCount = 1;

    const mockStore = configureStore([]);
    const store = mockStore({FILMS: [], PROMO: {}});
    const history = createMemoryHistory();
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <MainPageView filmGenre={filmGenre} initialCount={initialCount} />
          </Router>
        </Provider>
    );

    expect(getByText(`Catalog`)).toBeInTheDocument();
  });
});
