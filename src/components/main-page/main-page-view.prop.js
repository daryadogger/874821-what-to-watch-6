import PropTypes from 'prop-types';

const mainPageViewProps = {
  promoCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  filmGenre: PropTypes.string.isRequired
};

export default mainPageViewProps;
