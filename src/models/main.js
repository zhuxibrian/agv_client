'use strict';

import { routerRedux } from 'dva/router';

export default {
  namespace: 'main',
  state: {
    collapsed: false,
    mode: 'inline',
    draggableShow: false,
    pageState: 'show', // show list layout mark line conflict agv control system
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
      const { page, isDraggableShow, pageState } = payload;
      const nextPage = "/" + page;
      yield put({ type: 'draggableShowChange', payload: { isDraggableShow: isDraggableShow, currentPageState: pageState } });
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
    draggableShowChange: function (state, { payload }) {
      const { isDraggableShow, currentPageState } = payload;
      return {
        ...state,
        draggableShow: isDraggableShow,
        pageState: currentPageState,
      }
    },
  },
}

