import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import PlayerPage from './player-page';
import * as M from '../../store/hooks/use-select-film-for-player';

describe(`Поведение компонента PlayerPage`, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};

  });

  it(`Отрисовывает плеер`, () => {
    const filmIdToPlayer = 42;
    const mockStore = configureStore([]);
    const store = mockStore({FILMS: [{id: filmIdToPlayer, backgroundImage: `/`, name: `name`, videoLink: ``}], USER: {id: 1}});
    const history = createMemoryHistory();
    M.useSelectFilmForPlayer = jest.fn(()=>filmIdToPlayer);
    const {container, getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <PlayerPage />
          </Router>
        </Provider>
    );

    expect(container.querySelector(`video`)).toBeInTheDocument();
    expect(getByText(`Exit`)).toBeInTheDocument();
    expect(getByText(`Full screen`)).toBeInTheDocument();
  });
});
