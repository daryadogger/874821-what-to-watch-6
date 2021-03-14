import React, {useState} from 'react';
import ReviewFormView from '../review-form/review-form-view';
import getCamelCaseString from '../review-form/get-camel-case-string';
// import {useParams} from 'react-router';
// import Api from '../../api/api';
// import {useDispatch} from 'react-redux';
// import {ActionCreator} from '../../store/action';

const ReviewForm = () => {
  const [userForm, setUserForm] = useState({
    rating: ``,
    comment: ``,
  });

  // const api = new Api();
  // const dispatch = useDispatch();

  // const {id} = useParams();

  // const onSubmit = (id, {rating, comment}) => {
  //   api.postReviewById(id, {
  //     rating,
  //     comment
  //   });
  // .then(() => {
  //   dispatch(ActionCreator);
  // });
  // .catch((error) => {
  // console.log(error);
  // });
  // };
  // После submit history.push(film.id);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // onSubmit(id, {rating, comment});
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    const camelCaseName = getCamelCaseString(name);
    setUserForm({...userForm, [camelCaseName]: value});
  };

  const {rating, comment} = userForm;

  return <>

    <ReviewFormView handleSubmit={handleSubmit} handleFieldChange={handleFieldChange} rating={rating} comment={comment} />

  </>;
};

export default ReviewForm;
