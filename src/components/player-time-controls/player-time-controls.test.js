import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PlayerTimeControls from './player-time-controls';

describe(`Поведение компонента 'PlayerTimeControls'`, () => {
  it(`Отображает компонент, если в пропс пришли нужные данные`, () => {
    const progress = 10;
    const time = `1:30:00`;
    const onProgressClickHandler = jest.fn();
    const onTogglerMoveHandler = jest.fn();


    const history = createMemoryHistory();
    const {getByText} = render(
        <Router history={history}>
          <PlayerTimeControls progress={progress} time={time} onProgressClickHandler={onProgressClickHandler} onTogglerMoveHandler={onTogglerMoveHandler} />
        </Router>
    );

    expect(getByText(`Toggler`)).toBeInTheDocument();
    expect(getByText(time)).toBeInTheDocument();
  });

});
