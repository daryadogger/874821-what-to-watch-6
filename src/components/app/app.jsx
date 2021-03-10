import React, {useEffect} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import MyListPage from '../my-list-page/my-list-page';
import FilmPage from '../film-page/film-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPage from '../player-page/player-page';
import NotFoundPage from '../not-found-page/not-found-page';
import appProps from '../app/app.prop';
import {useSelector} from 'react-redux';
import {loadFilms} from '../../api/api';
import {ActionCreator} from '../../store/action';
import {useDispatch} from 'react-redux';


const App = (props) => {
  const {promoCard} = props;

  const loaded = useSelector((state) => state.films.length > 0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loaded) {
      return;
    }

    loadFilms().then((films) => {
      dispatch(ActionCreator.getFilmsList(films));
    });
  }, [loaded]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage promoCard={promoCard} />
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <Route exact path="/mylist">
          <MyListPage />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewPage />
        </Route>
        <Route exact path="/films/:id/:tab?">
          <FilmPage />
        </Route>
        <Route exact path="/player/:id">
          <PlayerPage />
        </Route>
        <Route exact path="/catalog/:genre">
          <MainPage promoCard={promoCard} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = appProps;

export default App;
