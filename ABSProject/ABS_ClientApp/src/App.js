import React from 'react';
import { history } from './helpers'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import { PrivateRoute } from './components'
import LoginPage from './components/login.component'
import RegistrationPage from './components/register.component'
import Dashboard from './components/dashboard.component'

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
