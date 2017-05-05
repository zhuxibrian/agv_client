import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';

import App from './routes/app';
import Login from './routes/login/login';
import Signup from './routes/signup/signup';
import LayoutPage from './routes/main/pages/layoutPage/layoutPage';
import ListPage from './routes/main/pages/listPage/listPage';
import DiagramPage from './routes/main/pages/diagramPage/diagramPage';

function RouterConfig({ history, app }) {
  function requireAuth(nextState, replace, callback) {
    app._store.dispatch({
      type: 'app/enterAuth',
      payload: {},
      onComplete: callback,
    });
  }

  return (
    <Router history={history}>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/" component={App} onEnter={requireAuth}>
        <IndexRoute component={LayoutPage} />
        <Route path="layout" component={LayoutPage} />
        <Route path="list" component={ListPage} />
        <Route path="diagram" component={DiagramPage} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
