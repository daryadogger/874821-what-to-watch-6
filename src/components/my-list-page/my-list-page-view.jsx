import React from 'react';
import {Link} from 'react-router-dom';
import {Page} from '../../const';
import CardsList from '../cards-list/cards-list';
import User from '../user/user';
import myListPageViewProps from './my-list-page-view.prop';

const MyListPageView = (props) => {
  const {genre, favoriteFilms} = props;

  return <>

    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={Page.MAIN} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <User />

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CardsList genre={genre} favoriteFilms={favoriteFilms} />

      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to={Page.MAIN} className="logo__link logo__link--light">
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

MyListPageView.propTypes = myListPageViewProps;

export default MyListPageView;
