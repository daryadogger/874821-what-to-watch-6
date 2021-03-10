import PropTypes from 'prop-types';

const filmReviewItemProps = {
  comment: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired

};

export default filmReviewItemProps;
