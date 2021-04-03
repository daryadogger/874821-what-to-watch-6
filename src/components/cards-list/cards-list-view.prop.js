import PropTypes from 'prop-types';

const cardsListViewProps = {
  filmsUrl: PropTypes.string.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired,
  idArray: PropTypes.arrayOf(
      PropTypes.number.isRequired
  ).isRequired,
  acitveFilmId: PropTypes.number,
  isHidden: PropTypes.bool,
  onBtnShowMoreClick: PropTypes.func.isRequired,
};

export default cardsListViewProps;
