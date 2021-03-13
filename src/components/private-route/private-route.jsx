import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router';
import privateRouteProps from './private-route.prop';

const PrivateRoute = (props) => {
  const {render, path, exact} = props;

  const authorizationStatus = useSelector((state) => state.authorizationStatus.id);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (authorizationStatus? render(routeProps) : <Redirect to={`/login`} />);
      }}
    />
  );
};

PrivateRoute.propTypes = privateRouteProps;

export default PrivateRoute;
