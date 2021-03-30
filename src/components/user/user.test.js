import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import User from './user';

describe(`Поведение компонента 'User'`, () => {
  it(`Возвращает ссылку на '/login', если пользователь не авторизован`, () => {
    const mockStore = configureStore([]);
    const store = mockStore({USER: {}});
    const history = createMemoryHistory();
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <User />
          </Router>
        </Provider>
    );

    expect(getByText(`Sign in`)).toBeInTheDocument();
  });

  it(`Возвращает аватар пользователя, если он авторизован`, () => {
    const mockStore = configureStore([]);
    const store = mockStore({USER: {id: 1}});
    const history = createMemoryHistory();
    const {queryByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <User />
          </Router>
        </Provider>
    );

    expect(queryByText(`Sign in`)).not.toBeInTheDocument();
  });

});
