import React from 'react';
import {render} from '@testing-library/react';
import * as M from '../../store/hooks/use-select-film-for-add-review';
import AddReviewPage from './add-review-page';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {Pages} from '../../const';

describe(`Поведение компонента 'AddReviewPage'`, () => {
  it(`Возвращает not-found, если фильма нет в хранилище и пользователь авторизован`, () => {

    const mockStore = configureStore([]);
    const store = mockStore({FILMS: [], USER: {id: 1}});
    const history = createMemoryHistory();
    M.useSelectFilmForAddReview = jest.fn(()=>undefined);
    render(
        <Provider store={store}>
          <Router history={history}>
            <AddReviewPage/>
          </Router>
        </Provider>
    );

    expect(history.location.pathname).toBe(Pages.NOT_FOUND_PAGE);
  });

  it(`Возвращает компонент 'AddReviewPage', если фильм есть в хранилище и пользователь авторизован`, () => {
    const mockStore = configureStore([]);
    const filmIdToReview = 42;
    const store = mockStore({
      FILMS: [{id: filmIdToReview, backgroundImage: `/`, name: `name`}],
      USER: {id: 1}
    });
    const history = createMemoryHistory();
    M.useSelectFilmForAddReview = jest.fn(()=>filmIdToReview);
    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <AddReviewPage/>
          </Router>
        </Provider>
    );

    expect(getByText(`Post`)).toBeInTheDocument();
  });
});
