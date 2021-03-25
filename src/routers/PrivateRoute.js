/* eslint-disable */
import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

const token = cookie.get('token');
export const PrivateRoute = ({
  isAuthenticated,
  user,
  component: Component,
  loadData,
  ...rest
}) => {
  useEffect(() => {
    if (!isAuthenticated) {
      loadData(token);
    }
  }, []);

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to='/backside/' />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    isAuthenticated: !!state.userReducer._id,
  };
};
export default PrivateRoute;
