import PropTypes from 'prop-types';

const mainPageViewProps = {
  filmGenre: PropTypes.string.isRequired,
  initialCount: PropTypes.number.isRequired,
  errorStatus: PropTypes.bool.isRequired
};

export default mainPageViewProps;
