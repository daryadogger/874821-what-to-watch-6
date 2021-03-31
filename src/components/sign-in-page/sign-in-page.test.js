import React from 'react';
import * as M from '../../store/hooks/use-authtorization';
import * as redux from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import SignInPage from './sign-in-page';
import SignInPageView from './sign-in-page-view';
import {Redirect} from 'react-router';

describe(`Поведение компонента 'SignInPage'`, () => {
  it(`Отображает компонент`, () => {
    M.useAuthtorization = jest.fn(()=> false);
    redux.useDispatch = jest.fn();

    const renderer = new ShallowRenderer();
    const result = renderer.render(
        <SignInPage />
    );

    expect(result.type).toBe(SignInPageView);
  });

  it(`Делает редирект, потому что пользователь уже зарегистрирован`, () => {
    M.useAuthtorization = jest.fn(()=> true);
    redux.useDispatch = jest.fn();

    const renderer = new ShallowRenderer();
    const result = renderer.render(
        <SignInPage />
    );

    expect(result.type).toBe(Redirect);
  });
});
