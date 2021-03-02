import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import MyListPage from '../my-list-page/my-list-page';
import FilmPage from '../film-page/film-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPage from '../player-page/player-page';
import NotFoundPage from '../not-found-page/not-found-page';
import appProps from '../app/app.prop';


const App = (props) => {
  const {promoCard} = props;

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
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = appProps;

export default App;
