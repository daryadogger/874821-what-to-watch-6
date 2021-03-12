import React from 'react';
import {Redirect, Route} from 'react-router';
import AuthorizationStatus from '../../const';
import privateRouteProps from './private-route.prop';

const PrivateRoute = (props) => {
  const {render, path, exact} = props;

  const authorizationStatus = `NO_AUTH`;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (authorizationStatus === AuthorizationStatus.AUTH ? render(routeProps) : <Redirect to={`/login`} />);
      }}
    />
  );
};

PrivateRoute.propTypes = privateRouteProps;

export default PrivateRoute;
