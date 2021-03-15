import PropTypes from 'prop-types';

const cardsListProps = {
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setComment: PropTypes.func.isRequired,
  setRating: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  isPostDisabled: PropTypes.bool.isRequired,
  isFormDisabled: PropTypes.bool.isRequired,
};

export default cardsListProps;
