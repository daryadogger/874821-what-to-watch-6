import React from 'react';
import {Link} from 'react-router-dom';
import cardViewProps from './card-view-props';

const CardView = (props) => {
  const {film, to, children} = props;

  return <>

    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={to} >{film.name}</Link>
      </h3>
    </article>

  </>;
};

CardView.propTypes = cardViewProps;

export default CardView;
