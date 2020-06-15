import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, Auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (Auth.isLoading) {
        return <h2>Loading...</h2>;
      } else if (!Auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  Auth: state.Auth,
});

export default connect(mapStateToProps)(PrivateRoute);
