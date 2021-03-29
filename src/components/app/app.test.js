import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';

describe(`Тестирование маршрутов`, () => {
  it(`Отображает 'NotFoundScreen' когда пользователь перешел на несуществующий маршрут`, () => {
    const history = createMemoryHistory();
    const mockStore = configureStore([]);
    const store = mockStore(
        {
          FILMS: [{label: ``, id: 1, name: `name`, previewVideoLink: `/`, genre: `a`}],
          PROMO: {label: ``, id: 1, name: `name`, previewVideoLink: `/`, genre: `a`},
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
