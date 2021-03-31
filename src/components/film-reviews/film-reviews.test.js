import React from 'react';
import {render} from '@testing-library/react';
import * as M from '../../store/hooks/use-select-comments';
import {Router} from 'react-router-dom';
import R from 'react-router';
import {Provider} from 'react-redux';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import FilmReviews from './film-reviews';
import ShallowRenderer from 'react-test-renderer/shallow';

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

  it(`Отображает комментарии к фильму, если он есть в хранилище`, () => {
    const element = {filmId: 42};
    const coments = [element, {
      user: {
        id: 4,
        name: `Kate Muir`
      },
      rating: 8.9,
      comment: ``
    }];

    M.useSelectComments = jest.fn(()=> coments);
    R.useParams = jest.fn(()=>({id: 42}));
    redux.useDispatch = jest.fn();

    const renderer = new ShallowRenderer();
    const result = renderer.render(
        <FilmReviews />
    );

    expect(result.type).toBe(`div`);
  });
});
