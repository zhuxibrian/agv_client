import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';

import App from './routes/app';
import Login from './routes/login/login';
import Signup from './routes/signup/signup';

function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/" component={App} />
    </Router>
  );
}

export default RouterConfig;
