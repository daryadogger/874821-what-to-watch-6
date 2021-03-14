import React, {useEffect, useState} from 'react';
import ReviewFormView from '../review-form/review-form-view';
import {useHistory} from 'react-router';
import {useParams} from 'react-router';
import Api from '../../api/api';
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH, RATINGS_COUNT} from '../../const';

const ReviewForm = () => {
  const history = useHistory();
  const {id} = useParams();
  const api = new Api();
  const dispatch = useDispatch();

  const [review, setReview] = useState({
    rating: `${RATINGS_COUNT}`,
    comment: ``,
  });
  const [errorMessage, setErrorMessage] = useState(``);
  const [isPostDisabled, setIsPostDisabled] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  useEffect(() => {
    if (review.comment.length < MIN_REVIEW_LENGTH || review.comment.length > MAX_REVIEW_LENGTH) {
      setIsPostDisabled(true);
    } else {
      setIsPostDisabled(false);
    }
  }, [review.comment]);

  const submit = () => {
    if (review.rating && review.comment) {
      api.postReviewById(id, review)
        .then((data) => {
          dispatch(ActionCreator.postComment(data));
          history.push(`/films/${id}`);
        })
      .catch((error) => {
        setErrorMessage(error.message);
      });
      return;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setIsFormDisabled(true);

    submit();
  };

  const setRating = (evt) => setReview({...review, rating: evt.target.value});
  const setComment = (evt) => setReview({...review, comment: evt.target.value});

  return <>

    <ReviewFormView handleSubmit={handleSubmit} setComment={setComment} setRating={setRating} rating={review.rating} comment={review.comment} errorMessage={errorMessage} isPostDisabled={isPostDisabled} isFormDisabled={isFormDisabled} />

  </>;
};

export default ReviewForm;
