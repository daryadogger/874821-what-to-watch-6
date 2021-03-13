import PropTypes from 'prop-types';

const cardsListProps = {
  rating: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired
};

export default cardsListProps;
