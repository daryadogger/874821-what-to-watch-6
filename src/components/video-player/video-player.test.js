import React from 'react';
import {render} from '@testing-library/react';
import VideoPlayer from './video-player';

describe(`Поведение компонента VideoPlayer`, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.load = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
  });

  it(`Отрисовывает плеер`, () => {
    const isActive = true;
    const src = ``;
    const posterImage = ``;
    const width = 1;
    const height = 1;
    const alt = ``;

    const {container} = render(
        <VideoPlayer isActive={isActive} src={src} posterImage={posterImage} width={width} height={height} alt={alt} />
    );

    expect(container.querySelector(`video`)).toBeInTheDocument();
  });
});
