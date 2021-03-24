import React, {useEffect, useState} from 'react';
import ReviewFormView from '../review-form/review-form-view';
import {useHistory} from 'react-router';
import {useParams} from 'react-router';
import Api from '../../api/api';
import {useDispatch} from 'react-redux';
import {postComment} from '../../store/action';
import {Pages, ReviewLength} from '../../const';

const ReviewForm = () => {
  const history = useHistory();
  const {id} = useParams();
  const api = new Api();
  const dispatch = useDispatch();

  const [review, setReview] = useState({
    rating: 0,
    comment: ``,
  });
  const [errorMessage, setErrorMessage] = useState(``);
  const [isPostDisabled, setIsPostDisabled] = useState(true);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  useEffect(() => {
    if (review.rating === 0 || review.comment.length < ReviewLength.MIN || review.comment.length > ReviewLength.MAX) {
      setIsPostDisabled(true);
    } else {
      setIsPostDisabled(false);
    }
  }, [review]);

  const submit = () => {
    api.postReviewById(id, review)
      .then((data) => {
        dispatch(postComment(data));
        history.push(Pages.hrefToFilm(id));
      })
    .catch((error) => {
      setErrorMessage(error.message);
    });
    return;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setIsFormDisabled(true);

    if (review.rating && review.comment) {
      submit();
    }
  };

  const setRating = (evt) => setReview({...review, rating: Number(evt.target.value)});
  const setComment = (evt) => setReview({...review, comment: evt.target.value});

  return (

    <ReviewFormView onSubmitHandler={handleSubmit} setComment={setComment} setRating={setRating} rating={review.rating} comment={review.comment} errorMessage={errorMessage} isPostDisabled={isPostDisabled} isFormDisabled={isFormDisabled} />

  );
};

export default ReviewForm;
