import React, {useEffect} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
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


const App = () => {
  const api = new Api();
  const loaded = useSelector((state) => state.films.length > 0);
  const promoFilm = useSelector((state) => state.promoFilm);
  const loadedPromo = Object.keys(promoFilm).length !== 0;

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
    if (loadedPromo) {
      return;
    }

    api.loadPromoFilm().then((film) => {
      dispatch(ActionCreator.getPromoFilm(film));
    });
  }, [loadedPromo]);

  if (!loaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage promoFilm={promoFilm} />
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
          <MainPage promoFilm={promoFilm} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
