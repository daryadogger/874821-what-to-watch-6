import React from 'react';
import {Link} from 'react-router-dom';
import PlayButton from '../play-button/play-button';
import PlayerTimeControls from '../player-time-controls/player-time-controls';
import playerPageViewProps from './player-page-view.prop';

const PlayerPageView = (props) => {
  const {id, name, videoLink, videoRef, backgroundImage, onPlayBtnClickHandler, isPlaying, onFullScreenBtnClickHandler, onProgressClickHandler, progress, onTogglerMoveHandler} = props;

  return (

    <div className="player">
      <video muted={false} src={videoLink} ref={videoRef} className="player__video" poster={backgroundImage} onClick={onPlayBtnClickHandler} ></video>

      <Link to={`/films/${id}`} className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">

          <PlayerTimeControls progress={progress} onProgressClickHandler={onProgressClickHandler} onTogglerMoveHandler={onTogglerMoveHandler} />

        </div>

        <div className="player__controls-row">

          <PlayButton isPlaying={isPlaying} onPlayBtnClick={onPlayBtnClickHandler} />

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
