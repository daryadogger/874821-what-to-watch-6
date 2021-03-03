import React from 'react';
import filmOverviewProps from '../film-overview/film-overview.prop';

const FilmOverview = (props) => {
  const {currentFilm} = props;

  return <>

    <div className="movie-rating">
      <div className="movie-rating__score">{currentFilm.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">{currentFilm.scoresCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{currentFilm.description}</p>

      <p className="movie-card__director"><strong>Director: {currentFilm.director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {currentFilm.starring.join(`, `)}</strong></p>
    </div>

  </>;
};

FilmOverview.propTypes = filmOverviewProps;

export default FilmOverview;
