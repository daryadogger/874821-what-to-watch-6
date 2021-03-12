import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Api from '../../api/api';
import AuthorizationStatus from '../../const';
import {ActionCreator} from '../../store/action';

const User = () => {
  const api = new Api();
  const authorizationStatus = useSelector((state) => state.authorizationStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    api.checkAuth()
      .then((status) => {
        dispatch(ActionCreator.requiredAuthorization(status));
      });
    // .catch((error) => {
    //   console.log(error);
    // });
  }, [authorizationStatus]);

  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    return (
      <div className="user-block">
        <Link to={`/login`} className="user-block__link">Sign in</Link>
      </div>
    );
  } else {
    return (
      <div className="user-block">
        <div className="user-block__avatar">
          <Link to={`/mylist`}>
            <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
          </Link>
        </div>
      </div>
    );
  }
};

export default User;
