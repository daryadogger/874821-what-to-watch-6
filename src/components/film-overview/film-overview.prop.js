import PropTypes from 'prop-types';

const filmOverviewProps = {
  currentFilm: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(
        PropTypes.string
    ),
  }).isRequired
};

export default filmOverviewProps;
