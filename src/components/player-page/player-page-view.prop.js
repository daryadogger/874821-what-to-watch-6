import PropTypes from 'prop-types';

const playerPageViewProps = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  videoRef: PropTypes.object.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  handlePlayBtnClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  handleFullScreenBtnClick: PropTypes.func.isRequired,
};

export default playerPageViewProps;
