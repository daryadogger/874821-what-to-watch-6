import React, {useState} from 'react';
import ReviewFormView from '../review-form/review-form-view';
import getCamelCaseString from '../review-form/get-camel-case-string';

const ReviewForm = () => {
  const [userForm, setUserForm] = useState({
    rating: ``,
    reviewText: ``,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    const camelCaseName = getCamelCaseString(name);
    setUserForm({...userForm, [camelCaseName]: value});
  };

  const {rating, reviewText} = userForm;

  return <>

    <ReviewFormView handleSubmit={handleSubmit} handleFieldChange={handleFieldChange} rating={rating} reviewText={reviewText} />

  </>;
};

export default ReviewForm;
