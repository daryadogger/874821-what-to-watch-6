import PropTypes from 'prop-types';

const privateRouteProps = {
  exact: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default privateRouteProps;
