import React from 'react';
import filmReviewItemProps from '../film-review-item/film-review-item.prop';
import dayjs from '../../api/dayjs';

const FilmReviewItem = (props) => {
  const {comment, user, date, rating} = props;

  return <>

    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>{`${dayjs(date).format(`MMMM D, YYYY`)}`}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>

  </>;
};

FilmReviewItem.propTypes = filmReviewItemProps;

export default FilmReviewItem;

