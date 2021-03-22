import React, {useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import Api from '../../api/api';
import {getCommentsById} from '../../store/action';
import FilmReviewItem from '../film-review-item/film-review-item';
import LoadingScreen from '../loading-screen/loading-screen';

// to storage ?
const selectComments = (COMMENTS, id) => {
  const found = COMMENTS.comments[id];
  return found;
};

const useSelectComments = (id) => useSelector(({COMMENTS}) => selectComments(COMMENTS, id), shallowEqual);


const FilmReviews = () => {
  const api = new Api();
  const {id} = useParams();
  const reviews = useSelectComments(id);

  const loaded = Array.isArray(reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loaded) {
      return;
    }

    api.loadReviewsById(id).then((comments) => {
      dispatch(getCommentsById({[id]: comments}));
    });

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
