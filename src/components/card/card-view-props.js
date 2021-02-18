import PropTypes from 'prop-types';

const cardViewProps = {
  film: PropTypes.shape({
    poster_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  to: PropTypes.string.isRequired
};

export default cardViewProps;
