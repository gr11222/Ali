import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
import Pages from './pages';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Pages} />
        <Redirect to='/'/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
