import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import Api from '../../api/api';
import {ActionCreator} from '../../store/action';
import FilmReviewItem from '../film-review-item/film-review-item';

const FilmReviews = () => {
  const api = new Api();
  const reviews = useSelector((state) => state.comments);
  const loaded = reviews.length > 0;
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    if (loaded) {
      return;
    }

    api.loadReviewsById(id).then((comments) => {
      dispatch(ActionCreator.getCommentsById(comments));
    });

  }, [loaded]);

  return <>

    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {reviews.map((review) => <FilmReviewItem key={review.id} comment={review.comment} user={review.user} date={review.date} rating={review.rating} />)}

      </div>
    </div>

  </>;
};

export default FilmReviews;
