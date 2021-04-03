import PropTypes from 'prop-types';

const signInPageViewProps = {
  onFormSubmitHandler: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default signInPageViewProps;
