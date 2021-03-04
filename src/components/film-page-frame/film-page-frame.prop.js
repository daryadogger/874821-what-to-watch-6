import PropTypes from 'prop-types';

const filmPageFrameProps = {
  children: PropTypes.node.isRequired,
  posterImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired
};

export default filmPageFrameProps;
