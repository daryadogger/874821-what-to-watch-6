import PropTypes from 'prop-types';

const mainPageViewProps = {
  promoFilm: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
  }).isRequired,
  filmGenre: PropTypes.string.isRequired
};

export default mainPageViewProps;
