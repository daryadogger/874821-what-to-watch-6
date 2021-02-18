import PropTypes from 'prop-types';

const cardViewProps = {
  film: PropTypes.shape({
    posterImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  to: PropTypes.string.isRequired
};

export default cardViewProps;
