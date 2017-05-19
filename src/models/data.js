'use strict';

export default {
  namespace: 'data',
  state: {
    changeable: false,
    data: {
      markDatas: [
        { x: 0.5, y: 0.6 },
        { x: 0.33, y: 0.69 },
        { x: 0.888, y: 0.222 },
      ],
    },
  },
  subscriptions: {},
  effects: {
    addMarkData: function* ({ payload }, { put }) {
      let { event, markDatas } = payload;
      const evt = event || window.event;
      const srcObj = evt.target || evt.srcElement;
      const pointX = evt.clientX - srcObj.getBoundingClientRect().left;
      const pointY = evt.clientY - srcObj.getBoundingClientRect().top;
      const x = pointX / srcObj.getBoundingClientRect().width;
      const y = pointY / srcObj.getBoundingClientRect().height;
      markDatas.push({ x, y });
      yield put({ type: 'markChanged', payload: { markDatas: markDatas } });
    },
    changeChangeable: function* ({ payload }, { put }) {
      const { changeable } = payload;
      yield put({ type: 'changeableChanged', payload: { changeable: changeable } });
    },
  },
  reducers: {
    markChanged: function (state, { payload }) {
      const { markDatas } = payload;
      return {
        ...state,
        data: {
          markDatas: markDatas,
        }
      };
    },
    changeableChanged: function (state, { payload }) {
      const { changeable } = payload;
      return {
        ...state,
        changeable: changeable,
      };
    },
  },

};
