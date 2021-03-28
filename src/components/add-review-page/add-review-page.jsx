import React from 'react';
import {Link, Redirect, useParams} from 'react-router-dom';
import {Pages} from '../../const';
import {useSelectFilmForAddReview} from '../../store/hooks/use-select-film-for-add-review';
import ReviewForm from '../review-form/review-form';
import User from '../user/user';

const AddReviewPage = () => {
  const {id} = useParams();
  const numberId = Number(id);
  const currentFilm = useSelectFilmForAddReview(numberId);

  if (typeof (currentFilm) === `undefined`) {  
    return <Redirect to={Pages.NOT_FOUND_PAGE} />;
  }

  return (

    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
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
                <Link to={Pages.hrefToFilm(id)} className="breadcrumbs__link">{currentFilm.name}</Link>
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
