import React, { PropTypes } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import { Link } from 'dva/router';
import { connect } from 'dva';
import LoginLayout from '../../components/loginLayout/loginLayout';
import styles from './signup.less';

const FormItem = Form.Item;
const Option = Select.Option;

const roles = [
  {
    value: 'Administrator',
    label: 'Administrator',
  }, {
    value: 'User',
    label: 'User',
  }
]

const Signup = ({
  form,
  dispatch,
  form: {
    getFieldDecorator,
  },
}) => {
  let passwordDirty = false;

  function handleSubmit(e) {
    e.preventDefault();
    form.validateFieldsAndScroll((error, { username, email, password }) => {
      if (!error) {
        dispatch({
          type: 'app/register',
          payload: { username, email, password }
        });
      }
    });
  }

  function handlePasswordBlue(e) {
    const value = e.target.value;
    passwordDirty = passwordDirty || !!value;
  }


  function checkPassword(rule, value, callback) {
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  function checkConfirm(rule, value, callback) {
    if (value && passwordDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  }
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 14,
        offset: 6,
      },
    },
  }

  const prefixSelectorStyle = {
    width: '60px',
  }
  const prefixSelector = getFieldDecorator('prefix', {
    initialValue: '86',
  })(
    <Select style={prefixSelectorStyle}>
      <Option value="86">+86</Option>
    </Select>
    )
  return (
    <LoginLayout>
      <div className={styles.signupPanel}>
        <Form onSubmit={handleSubmit} className={styles.signupForm}>
          <FormItem
            {...formItemLayout}
            label="ID"
          >
            {getFieldDecorator('id', {
              rules: [{ required: true, message: 'Please input the user ID!' }],
            })(
              <Input size="large" />
              )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Password"
            hasFeedback
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: checkConfirm,
              }],
            })(
              <Input type="password" onBlur={handlePasswordBlue}/>
              )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Confirm Password"
            hasFeedback
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: checkPassword,
              }],
            })(
              <Input type="password" />
              )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Name"
            hasFeedback
          >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
            })(
              <Input />
              )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Role"
          >
            {getFieldDecorator('residence', {
              initialValue: ['User'],
              rules: [{ type: 'array', required: true, message: 'Please select your role!' }],
            })(
              <Cascader options={roles} />
              )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Phone Number"
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(
              <Input addonBefore={prefixSelector} />
              )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="E-mail"
            hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
              )}
          </FormItem>
          <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>I have read the <a href="">agreement</a></Checkbox>
              )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" size="large">Register</Button>
            <span className={styles.toOther}>Have an account? <Link to="/login">Log in!</Link></span>
          </FormItem>
        </Form>
      </div>
    </LoginLayout>
  )
}


export default connect()(Form.create()(Signup));
