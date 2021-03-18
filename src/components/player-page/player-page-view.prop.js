import PropTypes from 'prop-types';

const playerPageViewProps = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  videoRef: PropTypes.object.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  onPlayBtnClickHandler: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onFullScreenBtnClickHandler: PropTypes.func.isRequired,
  onProgressClickHandler: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  onTogglerMoveHandler: PropTypes.func.isRequired,
};

export default playerPageViewProps;
