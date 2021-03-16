import PropTypes from 'prop-types';

const cardViewProps = {
  film: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default cardViewProps;
