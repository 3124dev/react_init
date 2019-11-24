import React from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import auth from '../components/auth';
import main from '../components/main';

export const history = createBrowserHistory();

const LoggedInRoutes = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={main} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  </Router>
);

const LoggedOutRoutes = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={auth} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  </Router>
);

const AppRouter = ({ isLoggedIn }: RouteProps): JSX.Element => {
  if (isLoggedIn)
    return  <LoggedInRoutes />;
  else 
    return <LoggedOutRoutes />;
}

interface RouteProps {
  isLoggedIn: boolean
}

export default AppRouter;