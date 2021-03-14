import React from 'react';
import {Redirect, Route} from 'react-router';
import useAuthtorization from '../../api/use-authtorization';
import privateRouteProps from './private-route.prop';

const PrivateRoute = (props) => {
  const {render, path, exact} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (useAuthtorization() ? render(routeProps) : <Redirect to={`/login`} />);
      }}
    />
  );
};

PrivateRoute.propTypes = privateRouteProps;

export default PrivateRoute;
