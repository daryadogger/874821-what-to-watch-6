import React from 'react';
import {Link} from 'react-router-dom';
import PlayButton from '../play-button/play-button';
import PlayerTimeControls from '../player-time-controls/player-time-controls';
import playerPageViewProps from './player-page-view.prop';
import {Pages} from '../../const';

const PlayerPageView = (props) => {
  const {id, time, name, videoLink, videoRef, backgroundImage, onPlayBtnClickHandler, isPlaying, onFullScreenBtnClickHandler, onProgressClickHandler, progress, onTogglerMoveHandler, onTimeUpdate} = props;

  return (

    <div className="player">
      <video muted={false} src={videoLink} ref={videoRef} className="player__video" poster={backgroundImage} onClick={onPlayBtnClickHandler} onTimeUpdate={onTimeUpdate} ></video>

      <Link to={Pages.hrefToFilm(id)} className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">

          <PlayerTimeControls progress={progress} onProgressClickHandler={onProgressClickHandler} onTogglerMoveHandler={onTogglerMoveHandler} time={time} />

        </div>

        <div className="player__controls-row">

          <PlayButton isPlaying={isPlaying} onPlayBtnClickHandler={onPlayBtnClickHandler} />

          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen" onClick={onFullScreenBtnClickHandler}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>

  );
};

PlayerPageView.propTypes = playerPageViewProps;

export default PlayerPageView;
