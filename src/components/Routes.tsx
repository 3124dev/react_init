import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import auth from './auth';
import main from './main';

const LoggedInRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={main} />
      <Redirect from="*" to="/" />
    </Switch>
)
}

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={auth} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default ({ isLoggedIn }: RouteProps): JSX.Element => {
  if (isLoggedIn)
    return  <LoggedInRoutes />;
  else 
    return <LoggedOutRoutes />;
}

interface RouteProps {
  isLoggedIn: boolean
}