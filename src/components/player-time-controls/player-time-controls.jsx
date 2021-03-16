import React from 'react';
import playerTimeControlsProps from './player-time-controls.prop';

const PlayerTimeControls = () => {

  return <>

    <div className="player__time">
      <progress className="player__progress" value="30" max="100"></progress>
      <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
    </div>
    <div className="player__time-value">1:30:00</div>

  </>;
};

PlayerTimeControls.propTypes = playerTimeControlsProps;

export default PlayerTimeControls;
