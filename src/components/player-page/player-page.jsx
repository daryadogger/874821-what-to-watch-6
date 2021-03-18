import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {Redirect, useParams} from 'react-router-dom';
import {MouseEvents, TOGGLER_WIDTH} from '../../const';
import PlayerPageView from './player-page-view';

const PlayerPage = () => {
  const {id} = useParams();
  const numberId = Number(id);
  const currentFilm = useSelector(({FILMS}) => FILMS.films.find((el) => el.id === numberId));
  const loaded = typeof (currentFilm) !== `undefined`;

  if (!loaded) {
    return <Redirect to={`/not-found-page`} />;
  }

  const {videoLink, backgroundImage, name} = currentFilm;
  const videoRef = useRef();

  const indent = 130;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isProgress, setIsProgress] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  const handlePlayBtnClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFullScreenBtnClick = () => {
    videoRef.current.requestFullscreen();
  };

  const handleProgressClick = (evt) => {
    const mousePosX = evt.clientX - TOGGLER_WIDTH;
    const progressBarWidth = window.screen.availWidth - indent;
    const mousePosPersent = (mousePosX * 100) / progressBarWidth;
    const filmDuration = Math.round(videoRef.current.duration);

    setIsProgress(Math.floor(mousePosPersent));
    videoRef.current.currentTime = (mousePosPersent * filmDuration / 100);
  };

  const onMouseMoveHandler = (evt) => {
    evt.preventDefault();

    handleProgressClick(evt);
  };

  const onMouseUpHandler = (evt) => {
    evt.preventDefault();

    handleProgressClick(evt);
    document.removeEventListener(MouseEvents.MOVE, onMouseMoveHandler);
    document.removeEventListener(MouseEvents.UP, onMouseUpHandler);
  };

  const handleTogglerMove = (evt) => {
    evt.preventDefault();

    document.addEventListener(MouseEvents.MOVE, onMouseMoveHandler);
    document.addEventListener(MouseEvents.UP, onMouseUpHandler);
  };

  return (

    <PlayerPageView id={numberId} name={name} videoLink={videoLink} videoRef={videoRef}
      backgroundImage={backgroundImage} onPlayBtnClickHandler={handlePlayBtnClick} isPlaying={isPlaying}
      onFullScreenBtnClickHandler={handleFullScreenBtnClick} onProgressClickHandler={handleProgressClick}
      progress={isProgress} onTogglerMoveHandler={handleTogglerMove} />

  );
};

export default PlayerPage;
