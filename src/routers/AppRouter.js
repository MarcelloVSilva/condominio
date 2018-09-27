import React from 'react';
import { Router, Switch} from 'react-router-dom';
import PublicRoute from './PublicRoute';
import createHistory from 'history/createBrowserHistory';

import App2 from '../App2';
import App from '../App';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={App} exact={true} />
        <PublicRoute path="/app2" component={App2} exact={true} />
      </Switch>
    </div>
  </Router>
);

export default  AppRouter; 