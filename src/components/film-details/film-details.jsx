import React from 'react';
import filmDetailsProps from '../film-details/film-details.prop';

const FilmDetails = (props) => {
  const {currentFilm} = props;

  const getStarring = (film) => {
    const result = [];
    film.starring.forEach((name) => {
      result.push(`${name},`);
      result.push(<br key={name} />);
    });
    return result;
  };

  const getDuration = (film) => {
    const totalMinutes = film.runTime;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${minutes}m`;
    }
  };

  return <>

    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{currentFilm.director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {getStarring(currentFilm)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">
            {getDuration(currentFilm)}
          </span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{currentFilm.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{currentFilm.released}</span>
        </p>
      </div>
    </div>

  </>;
};

FilmDetails.propTypes = filmDetailsProps;

export default FilmDetails;
