import React from 'react';
import reviewFormViewProps from './review-form-view.prop';
import RatingInput from '../rating-input/rating-input';
import {RATINGS_COUNT, ReviewLength} from '../../const';
import './review-form-styles.css';

const ReviewFormView = (props) => {
  const {comment, onSubmitHandler, setRating, setComment, errorMessage, isPostDisabled, isFormDisabled} = props;

  const ratingValues = Array.from({length: RATINGS_COUNT}, (_, i) => i + 1);

  return (

    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onSubmitHandler}>
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
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" data-testid="textarea" onChange={setComment} defaultValue={comment} minLength={ReviewLength.MIN} maxLength={ReviewLength.MAX} disabled={isFormDisabled}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isPostDisabled || isFormDisabled}>Post</button>
          </div>
        </div>
      </form>
    </div>

  );
};

ReviewFormView.propTypes = reviewFormViewProps;

export default ReviewFormView;
