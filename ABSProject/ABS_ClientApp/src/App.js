import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginPage from './components/pages/Login';
import RegistrationPage from './components/pages/Register';
import GuestRoute from './components/routes/GuestRoute';
import UserRoute from './components/routes/UserRoute';
import User from './components/user';
import Notification from './components/common/Notification';
import Dashboard from './components/pages/Dashboard';

const App = ({ location, isAuthenticated }) => (
  <div>
    {isAuthenticated && <User location={location} />}
    <Notification props />
    <GuestRoute location={location} path="/" exact component={LoginPage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <GuestRoute location={location} path="/register" exact component={RegistrationPage} />
    <UserRoute location={location} path="/dashboard" exact component={Dashboard} />
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