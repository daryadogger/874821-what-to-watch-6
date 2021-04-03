import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import SignInPageView from './sign-in-page-view';
import userEvent from '@testing-library/user-event';

describe(`Поведение компонента 'SignInPageView'`, () => {
  it(`Отображает компонент, если пользователь перешел на '/login'`, () => {
    const onFormSubmitHandler = jest.fn();
    const setEmail = jest.fn();
    const setPassword = jest.fn();
    const errorMessage = ``;
    const email = ``;
    const password = ``;

    const history = createMemoryHistory();
    history.push(`/login`);
    const {getByLabelText, getByDisplayValue, getByTestId} = render(
        <Router history={history}>
          <SignInPageView onFormSubmitHandler={onFormSubmitHandler} setEmail={setEmail} setPassword={setPassword} errorMessage={errorMessage} email={email} password={password} />
        </Router>
    );

    userEvent.type(getByTestId(`login`), `keks`);
    userEvent.type(getByTestId(`password`), `123456`);

    expect(getByDisplayValue(`keks`)).toBeInTheDocument();
    expect(getByDisplayValue(`123456`)).toBeInTheDocument();

    expect(getByLabelText(`Email address`)).toBeInTheDocument();
    expect(getByLabelText(`Password`)).toBeInTheDocument();
  });

});
