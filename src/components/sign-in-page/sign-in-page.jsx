import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Redirect, useHistory} from 'react-router-dom';
import Api from '../../api/api';
import {requiredAuthorization} from '../../store/action';
import SignInPageView from '../sign-in-page/sign-in-page-view';
import {Page, ERROR_EMPTY_INPUTS} from '../../const';
import {useAuthtorization} from '../../store/hooks/use-authtorization';
import camelize from '../../api/camelize';

const SignInPage = () => {
  const history = useHistory();

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [errorMessage, setErrorMessage] = useState(``);

  const api = new Api();
  const dispatch = useDispatch();

  if (useAuthtorization()) {
    return <Redirect to={Page.MAIN} />;
  }

  const submit = () => {
    (async () => {
      try {
        let data = await api.login({email, password});
        if (typeof data === `object`) {
          data = Object.keys(data).reduce((accumulator, currentValue)=> {
            accumulator[camelize(currentValue)] = data[currentValue];

            return accumulator;
          }, {});
        }
        dispatch(requiredAuthorization(data));
        history.push(Page.MAIN);
      } catch (error) {
        setErrorMessage(error.message);
      }
    })();
    return;
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (email && password) {
      submit();
    } else {
      setErrorMessage(ERROR_EMPTY_INPUTS);
    }
  };

  return (

    <SignInPageView onFormSubmitHandler={handleFormSubmit} setEmail={setEmail} setPassword={setPassword}
      errorMessage={errorMessage} email={email} password={password} />

  );
};

export default SignInPage;
