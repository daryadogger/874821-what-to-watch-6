import PropTypes from 'prop-types';

const videoPlayerProps = {
  isActive: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired
};

export default videoPlayerProps;
