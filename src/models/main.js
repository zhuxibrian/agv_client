'use strict';

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

