import React from 'react';
import {Link} from 'react-router-dom';
import AuthorizationStatus from '../../const';

const User = () => {
  const authorizationStatus = `AUTH`;

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
