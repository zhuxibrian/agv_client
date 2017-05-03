import React, { PropTypes } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'dva/router';
import { connect } from 'dva';
import LoginLayout from '../../components/loginLayout/loginLayout';
import styles from './login.less';

const FormItem = Form.Item;

const Login = ({
  dispatch,
  form: {
    getFieldDecorator,
    validateFields,
  },
}) => {
  function commit(data) {
    const { userid, password } = data;
    dispatch({ type: 'app/auth', payload: { userid, password } });
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateFields((error, values) => {
      if (!error) {
        commit(values);
      }
    });
  }

  return (
    <LoginLayout>
      <div className={styles.loginPanel}>
        <Form onSubmit={handleSubmit} className={styles.loginForm}>
          <FormItem>
            {getFieldDecorator('userid', {
              rules: [{ required: true, message: 'Please input your User ID!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="User ID" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
              )}
            <a className={styles.loginFormForgot} href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
              Log in
            </Button>
            Or <Link to="/signup">register now!</Link>
          </FormItem>
        </Form>
      </div>
    </LoginLayout>
  )
}


export default connect()(Form.create()(Login));

