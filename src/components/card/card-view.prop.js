import PropTypes from 'prop-types';

const cardViewProps = {
  film: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onCardClickHandler: PropTypes.func.isRequired,
  onCardMouseEnterHandler: PropTypes.func.isRequired,
  onCardMouseLeaveHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default cardViewProps;
