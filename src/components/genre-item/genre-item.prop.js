import PropTypes from 'prop-types';

const genreItemProps = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default genreItemProps;
