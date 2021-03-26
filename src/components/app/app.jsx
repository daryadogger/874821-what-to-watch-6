import React, {useEffect} from 'react';
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
import {getFilmsList, requiredAuthorization} from '../../store/action';
import {useDispatch} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../const';
import {selectAuth, useSelectAuth} from '../../store/hooks/use-select-auth';
import ErrorScreen from '../error-screen/error-screen';
import useFilmsLoaded from '../../store/hooks/use-films-loaded';
import {ignoreAuth} from '../../api/ignore-auth';

const App = () => {
  const api = new Api();
  const loaded = useFilmsLoaded();

  const userStatus = useSelectAuth();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async () => {
  //     if (loaded) {
  //       return;
  //     }

  //     try {
  //       const films = await api.loadFilms();
  //       dispatch(getFilmsList(films));
  //     } catch (err) {
  //       return;
  //     }
  //   })();
  // }, [loaded]);

  useEffect(() => {
    if (loaded) {
      return;
    }

    api.loadFilms()
      .then((films) => {
        dispatch(getFilmsList(films));
      })
      .catch(ignoreAuth);
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
      .catch(ignoreAuth);
  }, [userStatus]);

  if (!loaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage />
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

      <ErrorScreen />

    </BrowserRouter>
  );
};

export default App;
