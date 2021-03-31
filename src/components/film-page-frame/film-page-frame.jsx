import React from 'react';
import {Link, useParams, generatePath, useRouteMatch} from 'react-router-dom';
import CardsList from '../cards-list/cards-list';
import filmPageFrameProps from './film-page-frame.prop';
import User from '../user/user';
import FavoriteButton from '../favorite-button/favorite-button';
import {COUNT_OF_SIMULAR_FILMS, Pages, Tabs} from '../../const';
import {useAuthtorization} from '../../store/hooks/use-authtorization';

const FilmPageFrame = (props) => {
  const {children, posterImage, backgroundImage, name, genre, released, isFavorite} = props;

  const {id, tab} = useParams();
  const {path} = useRouteMatch();
  const currentFilmId = Number(id);

  return <>

    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <Link to={Pages.MAIN} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <User />
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <Link to={Pages.hrefToPlayer(id)} className="btn btn--play movie-card__button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>

              {useAuthtorization() ? <FavoriteButton isFavorite={isFavorite} id={currentFilmId} /> : ``}

              {useAuthtorization() ? <Link to={generatePath(path, {id, tab: Pages.REVIEW})} className="btn movie-card__button">Add review</Link> : ``}
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className={`movie-nav__item ${tab === undefined ? `movie-nav__item--active` : ``}`}>
                  <Link to={generatePath(path, {id})}
                    className="movie-nav__link">Overview</Link>
                </li>
                <li className={`movie-nav__item ${tab === Tabs.DETAILS ? `movie-nav__item--active` : ``}`}>
                  <Link to={generatePath(path, {id, tab: Tabs.DETAILS})} className="movie-nav__link">Details</Link>
                </li>
                <li className={`movie-nav__item ${tab === Tabs.REVIEWS ? `movie-nav__item--active` : ``}`}>
                  <Link to={generatePath(path, {id, tab: Tabs.REVIEWS})} className="movie-nav__link">Reviews</Link>
                </li>
              </ul>
            </nav>

            {children}

          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <CardsList enableButton={false} genre={genre} initialCount={COUNT_OF_SIMULAR_FILMS} isUpperCase={true} currentFilmId={currentFilmId} />

      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to={Pages.MAIN} className="logo__link logo__link--light">
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

FilmPageFrame.propTypes = filmPageFrameProps;

export default FilmPageFrame;
