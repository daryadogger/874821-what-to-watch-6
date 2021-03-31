import React from 'react';
import R from 'react-router';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainPage from './main-page';
import MainPageView from './main-page-view';

describe(`Поведение компонента 'MainPage'`, () => {
  it(`Возвращает компонент 'MainPage'`, () => {
    R.useParams = jest.fn(()=>({genre: `comedy`}));
    const renderer = new ShallowRenderer();
    const result = renderer.render(
        <MainPage />
    );

    expect(result.type).toBe(MainPageView);
  });
});
