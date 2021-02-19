import PropTypes from 'prop-types';

const cardViewProps = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  to: PropTypes.string.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default cardViewProps;
