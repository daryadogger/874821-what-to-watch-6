import React, {useEffect} from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import MyListPage from '../my-list-page/my-list-page';
import FilmPage from '../film-page/film-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPage from '../player-page/player-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {useSelector, useStore} from 'react-redux';
import Api from '../../api/api';
import {getFilmsList, requiredAuthorization} from '../../store/action';
import {useDispatch} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

const authSelector = (state) => state.userProfile.id;

const App = () => {
  const api = new Api();
  const loaded = useSelector((state) => state.films.length > 0);
  const userStatus = useSelector(authSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loaded) {
      return;
    }

    api.loadFilms().then((films) => {
      dispatch(getFilmsList(films));
    });
  }, [loaded]);

  const store = useStore();

  useEffect(() => {
    api.checkAuth()
      .then((status) => {
        const currentStatus = authSelector(store.getState());

        if (status !== currentStatus) {
          dispatch(requiredAuthorization(status));
        }
      });
    // .catch((error) => {
    //   console.log(error);
    // });
  }, [userStatus]);

  if (!loaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login" render={() => (
          <SignInPage />
        )}>
        </Route>
        <PrivateRoute exact path="/mylist" render={() => <MyListPage />} />
        <PrivateRoute exact path="/films/:id/review" render={() => <AddReviewPage />} />
        <Route exact path="/films/:id/:tab?">
          <FilmPage />
        </Route>
        <Route exact path="/player/:id">
          <PlayerPage />
        </Route>
        <Route exact path="/catalog/:genre">
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
