import React, {useCallback, useEffect, useRef, useState} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {Redirect, useParams} from 'react-router-dom';
import formatFilmDuration from '../../api/format-film-duration';
import {MouseEvents, Pages, TOGGLER_WIDTH} from '../../const';
import PlayerPageView from './player-page-view';

// to storage ?
const selectFilmForPlayer = (FILMS, id) => {
  const found = FILMS.films.find((el) => el.id === id);
  return found;
};

const useSelectFilmForPlayer = (id) => useSelector(({FILMS}) => selectFilmForPlayer(FILMS, id), shallowEqual);


const PlayerPage = () => {
  const {id} = useParams();
  const numberId = Number(id);
  const currentFilm = useSelectFilmForPlayer(numberId);
  const loaded = typeof (currentFilm) !== `undefined`;

  if (!loaded) {
    return <Redirect to={Pages.NOT_FOUND_PAGE} />;
  }

  const {videoLink, backgroundImage, name} = currentFilm;
  const videoRef = useRef();

  const INDENT = 130;

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

  const handleProgressClick = (evt) => {
    const posX = evt.clientX - TOGGLER_WIDTH;
    const timePos = (posX * 100) / (window.screen.availWidth - INDENT);

    setProgress(Math.floor(timePos));
    videoRef.current.currentTime = (timePos * Math.round(videoRef.current.duration)) / 100;
    setTime(formatFilmDuration(videoRef.current.currentTime));
  };

  const handleTimeUpdate = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    setTime(formatFilmDuration(duration - currentTime));
    const currentProgress = Math.floor(currentTime) / Math.floor(duration) * 100;
    setProgress(currentProgress);
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
      progress={progress} onTogglerMoveHandler={handleTogglerMove} time={time} onTimeUpdate={handleTimeUpdate} />

  );
};

export default PlayerPage;
