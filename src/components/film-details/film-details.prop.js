import PropTypes from 'prop-types';

const filmDetailsProps = {
  currentFilm: PropTypes.shape({
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(
        PropTypes.string
    ),
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }).isRequired
};

export default filmDetailsProps;
