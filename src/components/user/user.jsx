import React from 'react';
import {Link} from 'react-router-dom';
import useAuthtorization from '../../api/use-authtorization';
import {Pages} from '../../const';

const User = () => {

  if (useAuthtorization()) {
    return (

      <div className="user-block">
        <div className="user-block__avatar">
          <Link to={Pages.MY_LIST}>
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </div>

    );
  } else {
    return (

      <div className="user-block">
        <Link to={Pages.LOGIN} className="user-block__link">Sign in</Link>
      </div>

    );
  }
};

export default User;
