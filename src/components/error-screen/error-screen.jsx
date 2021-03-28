import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router';
import {getError} from '../../store/action';
import {useSelectError} from '../../store/hooks/use-select-error';
import './error-screen-styles.css';

const ErrorScreen = () => {
  const history = useHistory();
  const error = useSelectError();
  const dispatch = useDispatch();

  if (error) {
    return (

      <div className="error-screen">
        <div className="error-screen__wrapper">
          <h1>Error!</h1>
          <p>К сожалению, возникла ошибка. Вы будете перенаправлены на другую страницу.</p>
          <p>{error.errorText}</p>
          <button type="button" onClick={() => {
            dispatch(getError(undefined));
            history.push(error.url);
          }} className="error-screen__button">Понятно</button>
        </div>
      </div>

    );

  }

  return null;

};

export default ErrorScreen;
