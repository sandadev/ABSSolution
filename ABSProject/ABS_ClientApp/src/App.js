import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginPage from './components/pages/Login';
import RegistrationPage from './components/pages/Register';
import GuestRoute from './components/routes/GuestRoute';
import User from './components/user';
import Notification from './components/common/Notification'

const App = ({ location, isAuthenticated, props }) => (
  <div>
    {isAuthenticated && <User location={location} />}
    <Notification props/>
    <GuestRoute location={location} path="/" exact component={LoginPage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <GuestRoute
      location={location}
      path="/register"
      exact
      component={RegistrationPage}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: localStorage.getItem('user') ? true : false
  };
}

export default connect(mapStateToProps)(App);