import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router';
import Api from '../../api/api';
import AuthorizationStatus from '../../const';
import {ActionCreator} from '../../store/action';
import privateRouteProps from './private-route.prop';

const PrivateRoute = (props) => {
  const {render, path, exact} = props;

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
