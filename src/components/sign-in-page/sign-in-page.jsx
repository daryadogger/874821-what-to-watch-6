import React, {useRef} from 'react';
// import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import signInPageProps from './sign-in-page.prop';
// import Api from '../../api/api';
// import AuthorizationStatus from '../../const';
// import {ActionCreator} from '../../store/action';

const SingInPage = (props) => {
  const {onSubmit, onSubmitButtonClick} = props;
  const loginRef = useRef();
  const passwordRef = useRef();

  // const api = new Api();
  // const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      email: loginRef.current.value,
      password: passwordRef.current.value,
    });

    // api.login({
    //   email: loginRef.current.value,
    //   password: passwordRef.current.value,
    // }).then(() => {
    //   dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
    // });
  };

  return <>

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
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              <input
                ref={loginRef}
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
                ref={passwordRef}
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
              onClick={()=> {
                onSubmitButtonClick();
              }}
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

  </>;
};

SingInPage.propTypes = signInPageProps;

export default SingInPage;
