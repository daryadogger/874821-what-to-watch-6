import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import ErrorScreen from './error-screen';

describe(`Поведение компонента 'ErrorScreen'`, () => {
  it(`Отображает компонент, если в хранилище есть данные об ошибке`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({ERROR: {errorText: ``, url: ``}});
    const history = createMemoryHistory();
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <ErrorScreen />
          </Router>
        </Provider>
    );

    const title = getByText(`Error!`);
    const text = getByText(`К сожалению, возникла ошибка. Вы будете перенаправлены на другую страницу.`);

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });


});
