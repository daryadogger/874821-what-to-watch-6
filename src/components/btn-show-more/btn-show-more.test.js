import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import BtnShowMore from './btn-show-more';

describe(`Поведение компонента 'BtnShowMore'`, () => {
  it(`Отображает компонент, если в пропс пришли нужные данные`, () => {
    const onShowMore = jest.fn();
    const isHidden = true;

    const history = createMemoryHistory();
    const {getByText} = render(
        <Router history={history}>
          <BtnShowMore isHidden={isHidden} onShowMore={onShowMore} />
        </Router>
    );

    const buttonElement = getByText(`Show more`);

    expect(buttonElement).toBeInTheDocument();
  });
});
