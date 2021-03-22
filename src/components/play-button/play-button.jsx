import React from 'react';
import playButtonProps from './play-button.prop';

const PlayButton = (props) => {
  const {isPlaying, onPlayBtnClickHandler} = props;

  if (isPlaying) {
    return (

      <button type="button" className="player__play" onClick={onPlayBtnClickHandler}>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </button>

    );
  } else {
    return (

      <button type="button" className="player__play" onClick={onPlayBtnClickHandler}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>

    );
  }
};

PlayButton.propTypes = playButtonProps;

export default PlayButton;
