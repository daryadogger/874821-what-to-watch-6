import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Redirect, useHistory} from 'react-router-dom';
import Api from '../../api/api';
import {requiredAuthorization} from '../../store/action';
import useAuthtorization from '../../api/use-authtorization';
import SignInPageView from '../sign-in-page/sign-in-page-view';

const SignInPage = () => {
  const history = useHistory();

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [errorMessage, setErrorMessage] = useState(``);

  const api = new Api();
  const dispatch = useDispatch();

  if (useAuthtorization()) {
    return <Redirect to={`/`} />;
  }

  const submit = () => {
    api.login({
      email,
      password,
    })
      .then((data) => {
        dispatch(requiredAuthorization(data));
        history.push(`/`);
      })
    .catch((error) => {
      setErrorMessage(error.message);
    });
    return;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (email && password) {
      submit();
    } else {
      setErrorMessage(`Please enter all inputs`);
    }
  };

  return (

    <SignInPageView onSubmitHandler={handleSubmit} setEmail={setEmail} setPassword={setPassword}
      errorMessage={errorMessage} email={email} password={password} />

  );
};

export default SignInPage;
