import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link, Redirect, useHistory} from 'react-router-dom';
import signInPageProps from './sign-in-page.prop';
import Api from '../../api/api';
import {requiredAuthorization} from '../../store/action';
import useAuthtorization from '../../api/use-authtorization';

const SingInPage = () => {
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

    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="" className="sign-in__htmlForm" onSubmit={handleSubmit}>
          {(errorMessage) ? (
            <div className="sign-in__message">
              <p>{errorMessage}</p>
            </div>
          ) : (null)}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              <input
                defaultValue={email}
                onChange={(evt) => setEmail(evt.target.value)}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
            </div>
            <div className="sign-in__field">
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              <input
                defaultValue={password}
                onChange={(evt) => setPassword(evt.target.value)}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
            >Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>

  );
};

SingInPage.propTypes = signInPageProps;

export default SingInPage;
