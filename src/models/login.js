import { routerRedux } from 'dva/router'
import { login } from '../services/login'

export default {
  namespace: 'login',
  state: {
    loginLoading: false,
    isLoginUse: true,
  },

  effects: {
    *login ({
      payload,
    }, { put, call }) {
      yield put({ type: 'showLoginLoading' })
      const data = yield call(login, payload)
      yield put({ type: 'hideLoginLoading' })
      if (data.success) {
        yield put(routerRedux.push('/main'))
      } else {
        throw data
      }
    },
  },
  *changeLoginUse ({ payload }, { put }) {
    yield put({ type: 'changeLoginUse' })
  },

  reducers: {
    showLoginLoading (state) {
      return {
        ...state,
        loginLoading: true,
      }
    },
    hideLoginLoading (state) {
      return {
        ...state,
        loginLoading: false,
      }
    },
    'changeLoginUse' (state, { payload: isLoginUse }) {
      return {
        ...state,
        isLoginUse: !isLoginUse,
      }
    },
  },
}
