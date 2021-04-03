import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import PrivateRoute from './private-route';

const mockStore = configureStore({});
let history;
describe(`Поведение PrivateRouter`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/private`);
  });

  it(`Перенаправяет пользователя на страницу '/login', когда незарегистрированный пользователь пытается попасть на приватный маршрут`, () => {
    const store = mockStore({
      USER: {}
    });

    const {queryByText, getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path="/login"><h1>Public Route</h1></Route>
            <PrivateRoute
              exact
              path="/private"
              render={() => (<h1>Private Route</h1>)}
            />
          </Router>
        </Provider>
    );

    expect(queryByText(`Private Route`)).not.toBeInTheDocument();
    expect(getByText(`Public Route`)).toBeInTheDocument();
  });

  it(`Пускает пользователя на приватный маршрут, когда он авторизован`, () => {
    const store = mockStore({
      USER: {
        id: 1,
        email: `Oliver.conner@gmail.com`,
        name: `Oliver.conner`,
        avatarUrl: `img/1.png`
      }
    });

    const {queryByText, getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path="/login"><h1>Public Route</h1></Route>
            <PrivateRoute
              exact
              path="/private"
              render={() => (<h1>Private Route</h1>)}
            />
          </Router>
        </Provider>
    );

    expect(getByText(`Private Route`)).toBeInTheDocument();
    expect(queryByText(`Public Route`)).not.toBeInTheDocument();
  });
});
