import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';

import App from './routes/app';
import Login from './routes/login/login';
import Signup from './routes/signup/signup';
import Main from './routes/main/main';

function RouterConfig ({ history, app }) {
  function requireAuth(nextState, replace, callback) {
    app._store.dispatch({
      type: 'app/enterAuth',
      payload: {},
      onComplete: callback
    });
  }

  return (
    <Router history={history}>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/" component={App}>
        <IndexRoute component={Main} onEnter={requireAuth} />
        <Route path="main" component={Main} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
