import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router';
import Api from '../../api/api';
import {getCommentsById} from '../../store/action';
import {useSelectComments} from '../../store/hooks/use-select-comments';
import FilmReviewItem from '../film-review-item/film-review-item';
import LoadingScreen from '../loading-screen/loading-screen';

const FilmReviews = () => {
  const api = new Api();
  const {id} = useParams();
  const reviews = useSelectComments(id);

  const loaded = Array.isArray(reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (loaded) {
        return;
      }

      try {
        const comments = await api.loadReviewsById(id);
        dispatch(getCommentsById({[id]: comments}));
      } catch (err) {
        return;
      }
    })();
  }, [loaded]);

  if (!loaded) {
    return <LoadingScreen />;
  }

  return (

    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {reviews.map((review) => <FilmReviewItem key={`review-${review.id}`} comment={review.comment} user={review.user} date={review.date} rating={review.rating} />)}

      </div>
    </div>

  );
};

export default FilmReviews;
