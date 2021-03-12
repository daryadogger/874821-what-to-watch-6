import React, {useEffect} from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import MyListPage from '../my-list-page/my-list-page';
import FilmPage from '../film-page/film-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPage from '../player-page/player-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {useSelector} from 'react-redux';
import Api from '../../api/api';
import {ActionCreator} from '../../store/action';
import {useDispatch} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';


const App = () => {
  const api = new Api();
  const loaded = useSelector((state) => state.films.length > 0);
  const userStatus = useSelector((state) => state.authorizationStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loaded) {
      return;
    }

    api.loadFilms().then((films) => {
      dispatch(ActionCreator.getFilmsList(films));
    });
  }, [loaded]);

  useEffect(() => {
    api.checkAuth().then((status) => {
      dispatch(ActionCreator.requiredAuthorization(status));
    });
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
        <Route exact path="/login" render={({history}) => (
          <SignInPage onSubmitButtonClick={() => history.push(`/`)} />
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
