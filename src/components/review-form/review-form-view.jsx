import React from 'react';
import reviewFormViewProps from './review-form-view.prop';
import RatingInput from '../rating-input/rating-input';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH, RATINGS_COUNT} from '../../const';

const ReviewFormView = (props) => {
  const {comment, handleSubmit, setRating, setComment, errorMessage, isPostDisabled, isFormDisabled} = props;

  const ratingValues = Array.from({length: RATINGS_COUNT}, (_, i) => i + 1);

  return <>

    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        {(errorMessage) ? (
          <div className="review__message">
            <p>{errorMessage}</p>
          </div>
        ) : (null)}

        <div className="rating">
          <div className="rating__stars" onChange={setRating}>

            {ratingValues.map((value) => (<RatingInput key={`star-${value}`} value={value} disabled={isFormDisabled} />))}

          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={setComment} defaultValue={comment} minLength={MIN_REVIEW_LENGTH} maxLength={MAX_REVIEW_LENGTH} disabled={isFormDisabled}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isPostDisabled || isFormDisabled}>Post</button>
          </div>
        </div>
      </form>
    </div>

  </>;
};

ReviewFormView.propTypes = reviewFormViewProps;

export default ReviewFormView;
