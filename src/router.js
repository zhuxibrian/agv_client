import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';

import App from './routes/app';
import Login from './routes/login/login';
import Signup from './routes/signup/signup';
import Main from './components/main/main';

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
        <IndexRedirect to="main" />
        <Route path="main" component={Main} onEnter={requireAuth} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
