import PropTypes from 'prop-types';

const cardProps = {
  id: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired
};

export default cardProps;
