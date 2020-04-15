import React from 'react';
import { history } from './helpers';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';
import LoginPage from './components/pages/Login';
import RegistrationPage from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <Router history={history}>
      {/* <NavigationBar />
      <Sidebar /> */}
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
