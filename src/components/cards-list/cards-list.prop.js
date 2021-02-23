import PropTypes from 'prop-types';

const cardsListProps = {
  filmsUrl: PropTypes.string.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired,
  idArray: PropTypes.arrayOf(
      PropTypes.number.isRequired
  ).isRequired,
  acitveFilmId: PropTypes.number.isRequired
};

export default cardsListProps;
