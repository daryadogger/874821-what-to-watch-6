import React, {useEffect, useState} from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import MyListPage from '../my-list-page/my-list-page';
import FilmPage from '../film-page/film-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPage from '../player-page/player-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {useStore} from 'react-redux';
import Api from '../../api/api';
import {getError, getFilmsList, requiredAuthorization} from '../../store/action';
import {useDispatch} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import {AppRoute, Pages} from '../../const';
import {selectAuth, useSelectAuth} from '../../store/hooks/use-select-auth';
import {useSelectFilms} from '../../store/hooks/use-select-films';

const App = () => {
  const api = new Api();
  const loaded = useSelectFilms().length > 0;

  const userStatus = useSelectAuth();

  const dispatch = useDispatch();

  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {
    if (loaded) {
      return;
    }

    api.loadFilms()
      .then((films) => {
        dispatch(getFilmsList(films));
      })
      .catch((error) => {
        const errorText = error.name + `: ` + error.message;
        const url = Pages.MAIN;
        dispatch(getError({errorText, url}));
        setErrorStatus(true);
      });
  }, [loaded]);

  const store = useStore();

  useEffect(() => {
    api.checkAuth()
      .then((status) => {
        const currentStatus = selectAuth(store.getState());

        if (status !== currentStatus) {
          dispatch(requiredAuthorization(status));
        }
      })
      .catch((error) => {
        const errorText = error.name + `: ` + error.message;
        const url = Pages.LOGIN;
        dispatch(getError({errorText, url}));
        setErrorStatus(true);
      });
  }, [userStatus]);

  if (!loaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage errorStatus={errorStatus} />
        </Route>
        <Route exact path={AppRoute.LOGIN} render={() => (
          <SignInPage />
        )}>
        </Route>
        <PrivateRoute exact path={AppRoute.MY_LIST} render={() => <MyListPage />} />
        <PrivateRoute exact path={AppRoute.ADD_REVIEW} render={() => <AddReviewPage />} />
        <Route exact path={AppRoute.FILM}>
          <FilmPage />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <PlayerPage />
        </Route>
        <Route exact path={AppRoute.CATALOG}>
          <MainPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
