import React from 'react';
import {useHistory} from 'react-router';
import {useSelectError} from '../../store/hooks/use-select-error';
import './error-screen-styles.css';

const ErrorScreen = () => {
  const history = useHistory();
  const error = useSelectError();

  return (

    <div className="error-screen">
      <div className="error-screen__wrapper">
        <h1>Error!</h1>
        <p>К сожалению, возникла ошибка. Вы будете перенаправлены на другую страницу.</p>
        <p>{error.errorText}</p>
        <button type="button" onClick={() => history.push(error.url)} className="error-screen__button">Понятно</button>
      </div>
    </div>

  );
};

export default ErrorScreen;
