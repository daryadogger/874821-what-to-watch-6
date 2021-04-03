import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import formatFilmDuration from '../../api/format-film-duration';
import {MouseEvent, Page, TOGGLER_WIDTH} from '../../const';
import {useSelectFilmForPlayer} from '../../store/hooks/use-select-film-for-player';
import PlayerPageView from './player-page-view';

const INDENT = 130;

const PlayerPage = () => {
  const {id} = useParams();
  const numberId = Number(id);
  const currentFilm = useSelectFilmForPlayer(numberId);
  const loaded = typeof (currentFilm) !== `undefined`;

  if (!loaded) {
    return <Redirect to={Page.NOT_FOUND_PAGE} />;
  }

  const {videoLink, backgroundImage, name} = currentFilm;
  const videoRef = useRef();

  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(``);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  const handlePlayBtnClick = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);


  const handleFullScreenBtnClick = useCallback(() => {
    videoRef.current.requestFullscreen();
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    setTime(formatFilmDuration(duration - currentTime));
    const currentProgress = Math.floor(currentTime) / Math.floor(duration) * 100;
    setProgress(currentProgress);
  }, []);

  const handleProgressClick = useCallback((evt) => {
    const duration = videoRef.current.duration;
    const posX = evt.clientX - TOGGLER_WIDTH;
    const timePos = (posX * 100) / (window.screen.availWidth - INDENT);

    setProgress(Math.floor(timePos));
    videoRef.current.currentTime = (timePos * Math.round(videoRef.current.duration)) / 100;
    setTime(formatFilmDuration(duration - videoRef.current.currentTime));
  }, []);

  const onMouseMoveHandler = useCallback((evt) => {
    handleProgressClick(evt);
  }, []);

  const onMouseUpHandler = useCallback((evt) => {
    handleProgressClick(evt);
    document.removeEventListener(MouseEvent.MOVE, onMouseMoveHandler);
    document.removeEventListener(MouseEvent.UP, onMouseUpHandler);
  }, []);

  const handleTogglerMove = useCallback(() => {
    document.addEventListener(MouseEvent.MOVE, onMouseMoveHandler);
    document.addEventListener(MouseEvent.UP, onMouseUpHandler);
  }, []);

  return (

    <PlayerPageView id={numberId} name={name} videoLink={videoLink} videoRef={videoRef}
      backgroundImage={backgroundImage} onPlayBtnClickHandler={handlePlayBtnClick} isPlaying={isPlaying}
      onFullScreenBtnClickHandler={handleFullScreenBtnClick} onProgressClickHandler={handleProgressClick}
      progress={progress} onTogglerMoveHandler={handleTogglerMove} time={time} onTimeUpdate={handleTimeUpdate} />

  );
};

export default PlayerPage;
