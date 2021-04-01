import PropTypes from 'prop-types';

const genreItemProps = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
};

export default genreItemProps;
