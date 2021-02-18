import PropTypes from 'prop-types';

const myListPageProps = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        poster_image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        video_link: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired
      })
  ).isRequired
};

export default myListPageProps;
