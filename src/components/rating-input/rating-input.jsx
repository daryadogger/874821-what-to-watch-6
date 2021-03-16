import React from 'react';
import ratingInputProps from '../rating-input/rating-input.prop';

const RatingInput = (props) => {
  const {value, disabled} = props;

  return <>

    <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} disabled={disabled} />
    <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>

  </>;
};

RatingInput.propTypes = ratingInputProps;

export default RatingInput;
