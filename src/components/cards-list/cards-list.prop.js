import PropTypes from 'prop-types';

const cardsListProps = {
  initialCount: PropTypes.number,
  isUpperCase: PropTypes.bool,
  currentFilmId: PropTypes.number,
  favoriteFilms: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired,
        backgroundImage: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        videoLink: PropTypes.string.isRequired,
        previewVideoLink: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        scoresCount: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(
            PropTypes.string
        ),
        runTime: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired,
        isFavorite: PropTypes.number.isRequired,
      }).isRequired,
  ),
  genre: PropTypes.string.isRequired,
  enableButton: PropTypes.bool,
};

export default cardsListProps;
