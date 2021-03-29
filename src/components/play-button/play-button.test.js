import React from 'react';
import {render} from '@testing-library/react';
import PlayButton from './play-button';

describe(`Поведение компонента PlayButton`, () => {
  it(`Отображает Pause, если фильм идет`, () => {
    const onPlayBtnClickHandler = jest.fn();
    const isPlaying = true;

    const {getByText} = render(
        <PlayButton onPlayBtnClickHandler={onPlayBtnClickHandler} isPlaying={isPlaying} />
    );
    const textElement = getByText(`Pause`);

    expect(textElement).toBeInTheDocument();
  });

  it(`Отображает Play, если фильм не идет`, () => {
    const onPlayBtnClickHandler = jest.fn();
    const isPlaying = false;

    const {getByText} = render(
        <PlayButton onPlayBtnClickHandler={onPlayBtnClickHandler} isPlaying={isPlaying} />
    );
    const textElement = getByText(`Play`);

    expect(textElement).toBeInTheDocument();
  });
});
