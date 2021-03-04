import PropTypes from 'prop-types';

const mainPageViewProps = {
  promoCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  filmGenre: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  setFilmGenre: PropTypes.func.isRequired,
  onShowMore: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired
};

export default mainPageViewProps;
