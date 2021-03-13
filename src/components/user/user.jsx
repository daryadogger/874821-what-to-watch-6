import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const authSelector = (state) => state.authorizationStatus.id;
const User = () => {
  const authorizationStatus = useSelector(authSelector);

  if (!authorizationStatus) {
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
