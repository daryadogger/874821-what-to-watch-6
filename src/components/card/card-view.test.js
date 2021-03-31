import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import CardView from './card-view';

describe(`Поведение компонента 'CardView'`, () => {
  it(`Отображает компонент, если в пропс пришли нужные данные`, () => {
    const film = `Name`;
    const to = `/`;
    const onClickHandler = jest.fn();
    const onMouseEnterHandler = jest.fn();
    const onMouseLeaveHandler = jest.fn();

    const history = createMemoryHistory();
    const {getByText} = render(
        <Router history={history}>
          <CardView film={film} to={to} onClickHandler={onClickHandler} onMouseEnterHandler={onMouseEnterHandler} onMouseLeaveHandler={onMouseLeaveHandler}>
            <div></div>
          </CardView>
        </Router>
    );

    expect(getByText(film)).toBeInTheDocument();
  });

});
