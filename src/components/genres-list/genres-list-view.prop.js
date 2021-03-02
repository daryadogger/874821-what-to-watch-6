import PropTypes from 'prop-types';

const genresListViewProps = {
  genresArray: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  genre: PropTypes.string.isRequired,
  setGenre: PropTypes.func.isRequired,
};

export default genresListViewProps;
