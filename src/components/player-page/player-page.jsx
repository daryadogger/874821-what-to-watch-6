import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {Redirect, useParams} from 'react-router-dom';
import PlayerPageView from './player-page-view';

const PlayerPage = () => {
  const {id} = useParams();
  const numberId = Number(id);
  const currentFilm = useSelector((state) => state.films.find((el) => el.id === numberId));
  const loaded = typeof (currentFilm) !== `undefined`;

  if (!loaded) {
    return <Redirect to={`/not-found-page`} />;
  }

  const {videoLink, backgroundImage, name} = currentFilm;
  const videoRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);

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

  return (

    <PlayerPageView id={numberId} name={name} videoLink={videoLink} videoRef={videoRef} backgroundImage={backgroundImage} handlePlayBtnClick={handlePlayBtnClick} isPlaying={isPlaying} handleFullScreenBtnClick={handleFullScreenBtnClick} />

  );
};

export default PlayerPage;
