import React from 'react';
import {Redirect, Route} from 'react-router';
import {Page} from '../../const';
import {useAuthtorization} from '../../store/hooks/use-authtorization';
import privateRouteProps from './private-route.prop';

const PrivateRoute = (props) => {
  const {render, path, exact} = props;
  const authtorizationStatus = useAuthtorization();

  return (

    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (authtorizationStatus ? render(routeProps) : <Redirect to={Page.LOGIN} />);
      }}
    />

  );
};

PrivateRoute.propTypes = privateRouteProps;

export default PrivateRoute;
