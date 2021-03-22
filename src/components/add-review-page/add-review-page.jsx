import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {Pages} from '../../const';
import ReviewForm from '../review-form/review-form';
import User from '../user/user';

// to storage ?
const selectFilmForAddReview = (FILMS, id) => {
  const found = FILMS.films.find((el) => el.id === id);

  const {backgroundImage, name, posterImage} = found;
  return {backgroundImage, name, posterImage};
};

const useSelectFilmForAddReview = (id) => useSelector(({FILMS}) => selectFilmForAddReview(FILMS, id), shallowEqual);


const AddReviewPage = () => {
  const {id} = useParams();
  const numberId = Number(id);
  const currentFilm = useSelectFilmForAddReview(numberId);

  const hrefToFilm = `${Pages.FILMS}/${id}`;

  return (

    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={currentFilm.backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={Pages.MAIN} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={hrefToFilm} className="breadcrumbs__link">{currentFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <User />

        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={currentFilm.posterImage} alt={currentFilm.name} width="218" height="327" />
        </div>
      </div>

      <ReviewForm />

    </section>

  );
};

export default AddReviewPage;
