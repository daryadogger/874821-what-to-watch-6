import React from 'react';
import reviews from '../../mocks/reviews';
import FilmReviewItem from '../film-review-item/film-review-item';

const FilmReviews = () => {

  return <>

    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {reviews.map((review) => <FilmReviewItem key={review.id} comment={review.comment} user={review.user} date={review.date} rating={review.rating} />)}

      </div>
    </div>

  </>;
};

export default FilmReviews;
