import React from 'react';
import {Link} from 'react-router-dom';
import signInPageViewProps from './sign-in-page-view.prop';

const SignInPageView = (props) => {
  const {onSubmitHandler, setEmail, setPassword, errorMessage, email, password} = props;

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
        <form action="" className="sign-in__htmlForm" onSubmit={onSubmitHandler}>
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

SignInPageView.propTypes = signInPageViewProps;

export default SignInPageView;
