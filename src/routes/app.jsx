import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { message } from 'antd';
import Main from './main/main';

const App = ({
  children,
  dispatch,
  routes,
  params,
  isLogin,
  account,
}) => {
  return isLogin ? <Main>{children}</Main> : <div />
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  isLogin: PropTypes.bool.isRequired,
  routes: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect((state, ownProps) => {
  return {
    isLogin: state.app.isLogin,
    account: state.app.account,
  };
})(App);
