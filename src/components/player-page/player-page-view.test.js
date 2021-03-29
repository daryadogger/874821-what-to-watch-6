import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PlayerPageView from './player-page-view';

describe(`Поведение компонента 'PlayerPageView'`, () => {

  it(`Отображает компонент, если в пропс пришли нужные данные`, () => {

    const useRef = jest.spyOn(React, `useRef`).mockReturnValue({});

    const id = 1;
    const name = `Name`;
    const progress = 10;
    const time = `1:30:00`;
    const videoRef = useRef;
    const videoLink = ``;
    const backgroundImage = ``;
    const isPlaying = true;
    const onProgressClickHandler = jest.fn();
    const onTogglerMoveHandler = jest.fn();
    const onFullScreenBtnClickHandler = jest.fn();
    const onPlayBtnClickHandler = jest.fn();
    const onTimeUpdate = jest.fn();

    const history = createMemoryHistory();
    const {getByText} = render(
        <Router history={history}>
          <PlayerPageView id={id} name={name} time={time} progress={progress} videoRef={videoRef} videoLink={videoLink} backgroundImage={backgroundImage} isPlaying={isPlaying} onFullScreenBtnClickHandler={onFullScreenBtnClickHandler} onTogglerMoveHandler={onTogglerMoveHandler} onProgressClickHandler={onProgressClickHandler} onPlayBtnClickHandler={onPlayBtnClickHandler} onTimeUpdate={onTimeUpdate} />
        </Router>
    );

    const textElement = getByText(`Full screen`);
    const titleElement = getByText(name);
    const linkElement = getByText(`Exit`);

    expect(textElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });

});
