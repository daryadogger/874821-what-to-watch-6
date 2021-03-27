import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import RatingInput from './rating-input';

it(`Находит текстовое содержимое в компоненте RatingInput`, () => {
  const history = createMemoryHistory();
  const value = 10;
  const disabled = true;

  const {getByText} = render(

      <Router history={history}>
        <RatingInput disabled={disabled} value={value} />
      </Router>
  );
  const label = getByText(`Rating ${value}`);

  expect(label).toBeInTheDocument();
});
