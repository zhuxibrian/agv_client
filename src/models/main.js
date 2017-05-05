'use strict';

import { routerRedux } from 'dva/router';

export default {
  namespace: 'main',
  state: {
    collapsed: false,
    mode: 'inline',
  },
  subscriptions: {},
  effects: {
    changeLayoutState: function* ({ payload }, { put }) {
      let { collapsed } = payload;
      collapsed = !collapsed;
      const mode = collapsed ? 'vertical' : 'inline';
      yield put({ type: 'layoutState', payload: { collapsed: collapsed, mode: mode } });
    },
    changePage: function* ({ payload }, { put }) {
      const { page } = payload;
      const nextPage = "/" + page;
      yield put(routerRedux.push(nextPage));
    },
  },
  reducers: {
    layoutState: function (state, { payload }) {
      const { collapsed, mode } = payload;
      return {
        ...state,
        collapsed,
        mode,
      };
    },
  },
}

