import PropTypes from 'prop-types';

const mainPageProps = {
  promoCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired
};

export default mainPageProps;
