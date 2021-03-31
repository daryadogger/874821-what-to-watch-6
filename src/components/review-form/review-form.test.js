import React from 'react';
import R from 'react-router';
import * as redux from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import ReviewForm from './review-form';
import ReviewFormView from './review-form-view';

describe(`Поведение компонента 'ReviewForm'`, () => {
  it(`Отображает компонент`, () => {
    redux.useDispatch = jest.fn();
    R.useParams = jest.fn(()=>({id: 42}));

    const renderer = new ShallowRenderer();
    const result = renderer.render(
        <ReviewForm />
    );

    expect(result.type).toBe(ReviewFormView);
  });
});
