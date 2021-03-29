import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Redirect, useHistory} from 'react-router-dom';
import Api from '../../api/api';
import {requiredAuthorization} from '../../store/action';
import SignInPageView from '../sign-in-page/sign-in-page-view';
import {Pages, ERROR_EMPTY_INPUTS} from '../../const';
import useAuthtorization from '../../store/hooks/use-authtorization';

const SignInPage = () => {
  const history = useHistory();

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [errorMessage, setErrorMessage] = useState(``);

  const api = new Api();
  const dispatch = useDispatch();

  if (useAuthtorization()) {
    return <Redirect to={Pages.MAIN} />;
  }

  const submit = () => {
    (async () => {
      try {
        const data = await api.login({email, password});
        dispatch(requiredAuthorization(data));
        history.push(Pages.MAIN);
      } catch (error) {
        setErrorMessage(error.message);
      }
    })();
    return;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (email && password) {
      submit();
    } else {
      setErrorMessage(ERROR_EMPTY_INPUTS);
    }
  };

  return (

    <SignInPageView onSubmitHandler={handleSubmit} setEmail={setEmail} setPassword={setPassword}
      errorMessage={errorMessage} email={email} password={password} />

  );
};

export default SignInPage;
