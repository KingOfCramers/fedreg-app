import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ isAuthenticated, component: Component, ...rest })  => ( // The ...rest spread assigns the remaining props to the variable "rest".
  <Route {...rest} component={(props) => ( // Conditional return of component, or redirect, based on isAuthentication prop...
    isAuthenticated ? (
      <Redirect to="/dashboard" /> // Redirect user to dashboard if logged in.
      ) : (
        <Component {...props} />
      )
    )
  }/>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid // If exists, will be value, otherwise undefined...Flip to true or false.
});

export default connect(mapStateToProps)(PublicRoute);