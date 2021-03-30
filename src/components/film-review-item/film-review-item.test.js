import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmReviewItem from './film-review-item';

it(`Находит текстовое содержимое в компоненте FilmReviewItem`, () => {
  const history = createMemoryHistory();

  const comment = `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`;
  const user = {
    id: 1,
    name: `Zak`
  };
  const date = `2021-02-22T08:04:28.658Z`;
  const rating = 1.4;

  const {getByText} = render(

      <Router history={history}>
        <FilmReviewItem comment={comment} user={user} date={date} rating={rating} />
      </Router>
  );

  expect(getByText(comment)).toBeInTheDocument();
  expect(getByText(user.name)).toBeInTheDocument();
});
