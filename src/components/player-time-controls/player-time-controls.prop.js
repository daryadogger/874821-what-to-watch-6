import PropTypes from 'prop-types';

const playerTimeControlsProps = {
  // time: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  onProgressClickHandler: PropTypes.func.isRequired,
  onTogglerMoveHandler: PropTypes.func.isRequired,
};

export default playerTimeControlsProps;
