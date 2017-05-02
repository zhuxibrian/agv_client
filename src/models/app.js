'use strict';

import {
  auth,
  fetchUser,
} from '../services/app';
import { createUser } from '../services/user';
import { routerRedux } from 'dva/router';
import { storageTokenKey } from '../utils/constant';
import { message } from 'antd';

export default {
  namespace: 'app',
  state: {
    isLogin: false,
    account: {
      ability: null,
      email: null,
      phone: null,
      role: null,
      userid: null,
      username: null,
    }
  },
  subscriptions: {},
  effects: {
    auth: function* ({ payload }, { call, put }) {
      const { userid, password } = payload;
      try {
        const { data } = yield call(auth, { userid, password });

        // succeed to login
        if (data) {
          const { userid, username, email, phone, role, ability, access_token } = data;
          const token = access_token;

          // save the token to the local storage.
          window.sessionStorage.setItem(storageTokenKey, token);
          yield put({
            type: 'authSuccess',
            payload: { account: { userid, username, email, phone, role, ability } }
          });
          yield put(routerRedux.push('/main'));
        }
      } catch (error) {
        message.error('Wrong userid or Password.. :(', 4);
      }
    },
    enterAuth: function* ({ payload, onComplete }, { put, take }) {
      yield [put({ type: 'checkToken' }), put({ type: 'queryUser' })];
      yield [take('app/hasToken'), take('app/queryUserSuccess')];
      onComplete();
    },
    checkToken: function* ({ payload }, { put, call, select }) {
      // get the token from local storage.
      const token = window.sessionStorage.getItem(storageTokenKey);
      if (token) {
        yield put({ type: 'hasToken' });
      } else {
        yield put({ type: 'authFail' });
      }
    },
    logout: function* ({ payload }, { put }) {
      yield put({ type: 'authFail' });
      window.sessionStorage.removeItem(storageTokenKey);
      yield put(routerRedux.push('/login'));
    },
    queryUser: function* ({ payload }, { put, call }) {
      const { data } = yield call(fetchUser);
      if (data) {
        yield put({
          type: 'queryUserSuccess',
          payload: { account: data }
        });
      }
    },
    register: function* ({ payload }, { put, call }) {
      const { userid, email, password } = payload;
      const { data } = yield call(createUser, { userid, email, password });
      if (data) {
        yield put({
          type: 'auth',
          payload: { userid, password }
        });
      }
    }
  },
  reducers: {
    authSuccess: function (state, { payload }) {
      const { account } = payload;
      return {
        ...state,
        account,
        isLogin: true
      };
    },
    hasToken: function (state) {
      return {
        ...state,
        isLogin: true
      };
    },
    queryUserSuccess: function (state, { payload }) {
      const { account } = payload;
      return {
        ...state,
        account
      };

    },
    authFail: function (state) {
      return {
        ...state,
        isLogin: false,
        account: {
          userid: null,
          username: null,
          email: null,
          phone: null,
          role: null,
          ability: null,
        }
      };
    }
  }

}
