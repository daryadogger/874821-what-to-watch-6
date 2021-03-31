import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import GenreItem from './genre-item';

describe(`Поведение компонента 'GenreItem'`, () => {
  it(`Отображает компонент, если в пропс пришли нужные данные`, () => {
    const active = true;
    const label = `Genre`;
    const to = `/`;

    const history = createMemoryHistory();
    const {getByText} = render(
        <Router history={history}>
          <GenreItem to={to} label={label} active={active} />
        </Router>
    );

    expect(getByText(label)).toBeInTheDocument();
  });

});
