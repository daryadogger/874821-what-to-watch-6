import PropTypes from 'prop-types';

const cardsListProps = {
  activeFilmId: PropTypes.number.isRequired,
  filmsUrl: PropTypes.string.isRequired,
  idArray: PropTypes.arrayOf(
      PropTypes.number.isRequired
  ).isRequired
};

export default cardsListProps;
