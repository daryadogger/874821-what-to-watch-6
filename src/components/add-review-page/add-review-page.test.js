import React from 'react';
import {render} from '@testing-library/react';
import {useSelectFilmForAddReview} from '../../store/hooks/use-select-film-for-add-review';
import AddReviewPage from './add-review-page';
import {MemoryRouter, Redirect, useParams} from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

jest.mock(`../../store/hooks/use-select-film-for-add-review`, () => {
  return {useSelectFilmForAddReview: jest.fn()};
});
jest.mock(`react-router-dom`, () => {
  return {useParams: jest.fn()};
});

const Component = () => {
  throw new Error(`Error`);
  // return (<div>404. Page not found</div>);
};

const Child = () => {
  return (<Redirect to={`/`} />);
};


describe(`Поведение компонента 'AddReviewPage'`, () => {
  it(`Возвращает not-found, если фильма нет в хранилище`, () => {
    useSelectFilmForAddReview.mockImplementation(() => undefined);
    useParams.mockImplementation(() => 42);

    const renderer = new ShallowRenderer();
    renderer.render(<MemoryRouter><Child /></MemoryRouter>);
    const result = renderer.getRenderOutput();

    expect(typeof (Redirect)).toBe(`undefined`);
    expect(result.type).toBe(Redirect);


    // const {getByText} = render(
    //     <Child />
    //     // <AddReviewPage />
    // );

    // expect(getByText(`404. Page not found`)).toBeInTheDocument();
  });

  it(`Возвращает компонент 'AddReviewPage', если фильм есть в хранилище`, () => {

  });
});
