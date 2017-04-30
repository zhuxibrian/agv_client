import React, { PropTypes } from 'react';
import { Button } from 'antd';

const Main = ({
  routes,
  params,
  account,
  children,
  handleClickLogOut,
}) => {
  return (
    <div>
      <h2>Main Page {account.userid}</h2>
      <Button type="primary" htmlType="button" onClick={handleClickLogOut}>
        Log in
      </Button>
    </div>
  )
}


export default Main;
