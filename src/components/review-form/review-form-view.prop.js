import PropTypes from 'prop-types';

const cardsListProps = {
  comment: PropTypes.string.isRequired,
  onFormSubmitHandler: PropTypes.func.isRequired,
  setComment: PropTypes.func.isRequired,
  setRating: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  isPostDisabled: PropTypes.bool.isRequired,
  isFormDisabled: PropTypes.bool.isRequired,
};

export default cardsListProps;
