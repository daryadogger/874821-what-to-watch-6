import React from 'react';
import {render} from '@testing-library/react';
import LoadingScreen from './loading-screen';

it(`Отображает LoadingScreen`, () => {
  const {getByText} = render(
      <LoadingScreen />
  );

  expect(getByText(`Loading...`)).toBeInTheDocument();
});
