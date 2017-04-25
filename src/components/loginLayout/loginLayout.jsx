'use strict';

import React from 'react';
import { Layout } from 'antd';
import styles from './loginLayout.less';

const { Content } = Layout;

const LoginLayout = (props) => {
  return (
    <Layout className={styles.normal}>
      <div className={styles.background}>
        {props.children}
      </div>
    </Layout>
  );
}

export default LoginLayout;
