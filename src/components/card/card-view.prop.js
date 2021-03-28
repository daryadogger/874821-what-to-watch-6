import PropTypes from 'prop-types';

const cardViewProps = {
  film: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  onMouseEnterHandler: PropTypes.func.isRequired,
  onMouseLeaveHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default cardViewProps;
