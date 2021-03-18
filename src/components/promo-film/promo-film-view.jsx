import React from 'react';
import {Link} from 'react-router-dom';
import FavoriteButton from '../favorite-button/favorite-button';
import User from '../user/user';
import promoFIlmViewProps from './promo-film-view.prop';

const PromoFilmView = (props) => {
  const {promoFilm} = props;
  const {name, genre, posterImage, backgroundImage, released, id} = promoFilm;

  return (

    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <User />

      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <Link to={`/player/${id}`} className="btn btn--play movie-card__button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>

              <FavoriteButton id={id} />

            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

PromoFilmView.propTypes = promoFIlmViewProps;

export default PromoFilmView;
