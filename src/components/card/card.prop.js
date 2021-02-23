import PropTypes from 'prop-types';

const cardProps = {
  id: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired
};

export default cardProps;
