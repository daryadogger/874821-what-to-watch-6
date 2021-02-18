import PropTypes from 'prop-types';

const appProps = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        poster_image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        video_link: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired
      })
  ).isRequired,
  promoCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired
};

export default appProps;
