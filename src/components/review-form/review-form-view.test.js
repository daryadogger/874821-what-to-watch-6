import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';
import ReviewFormView from './review-form-view';

describe(`Поведение компонента 'ReviewFormView'`, () => {
  it(`Отображает компонент, если пользователь перешел на '/films/:id/review'`, () => {
    const onSubmitHandler = jest.fn();
    const setRating = jest.fn();
    const setComment = jest.fn();
    const errorMessage = ``;
    const comment = ``;
    const isPostDisabled = false;
    const isFormDisabled = false;

    const history = createMemoryHistory();
    history.push(`/films/1/review`);
    const {getByText, getByTestId, getByDisplayValue} = render(
        <Router history={history}>
          <ReviewFormView onSubmitHandler={onSubmitHandler} setRating={setRating} setComment={setComment} errorMessage={errorMessage} comment={comment} isPostDisabled={isPostDisabled} isFormDisabled={isFormDisabled} />
        </Router>
    );

    expect(getByText(`Post`)).toBeInTheDocument();
    userEvent.type(getByTestId(`textarea`), `test comment`);
    expect(getByDisplayValue(`test comment`)).toBeInTheDocument();
  });

  it(`Блокирует форму, если пользователь заполнил комментарий, но не дал оценку и попытался отправить`, () => {
    const setRating = jest.fn();
    const setComment = jest.fn();
    const errorMessage = ``;
    const comment = ``;
    const isPostDisabled = false;
    let isFormDisabled = false;
    const onSubmitHandler = jest.fn();
    onSubmitHandler.mockImplementation(
        () => (isFormDisabled = true)
    );

    const history = createMemoryHistory();

    history.push(`/films/1/review`);
    const {getByText, getByTestId, getByDisplayValue} = render(
        <Router history={history}>
          <ReviewFormView onSubmitHandler={onSubmitHandler} setRating={setRating} setComment={setComment} errorMessage={errorMessage} comment={comment} isPostDisabled={isPostDisabled} isFormDisabled={isFormDisabled} />
        </Router>
    );

    expect(getByText(`Post`)).toBeInTheDocument();
    userEvent.type(getByTestId(`textarea`), `test comment`);
    expect(getByDisplayValue(`test comment`)).toBeInTheDocument();
    fireEvent.submit(getByTestId(`textarea`));
    expect(onSubmitHandler).toBeCalled();
    expect(isFormDisabled).toBe(true);
  });

});
