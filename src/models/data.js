'use strict';
import { getClickPercent } from '../utils/utils'

export default {
  namespace: 'data',
  state: {
    changeable: false,
    data: {
      markData: [
        { x: 0.5, y: 0.6 },
        { x: 0.33, y: 0.69 },
        { x: 0.888, y: 0.222 },
      ],
      controlData: [
        { x: 0.4, y: 0.4 },
        { x: 0.23, y: 0.29 },
        { x: 0.788, y: 0.422 },
      ],
      lineData: [
        { name: 'Line1', point: [{ x: 0.36, y: 0.56 }, { x: 0.563, y: 0.369 }, { x: 0.566, y: 0.669 }] },
        { name: 'Line2', point: [{ x: 0.456, y: 0.56 }, { x: 0.563, y: 0.369 }, { x: 0.566, y: 0.777 }] },
      ],
    },
  },
  subscriptions: {},
  effects: {
    addMarkData: function* ({ payload }, { put }) {
      const { event, markData } = payload;
      const { x, y } = getClickPercent(event);
      markData.push({ x, y });
      console.log(x);
      yield put({ type: 'markChanged', payload: { markData: markData } });
    },
    addControlData: function* ({ payload }, { put }) {
      const { event, controlData } = payload;
      const { x, y } = getClickPercent(event);
      controlData.push({ x, y });
      console.log(x);
      yield put({ type: 'controlChanged', payload: { controlData: controlData } });
    },
    changeChangeable: function* ({ payload }, { put }) {
      const { changeable } = payload;
      yield put({ type: 'changeableChanged', payload: { changeable: changeable } });
    },
  },
  reducers: {
    markChanged: function (state, { payload }) {
      const { markData } = payload;
      return {
        ...state,
        data: {
          ...state.data,
          markData: markData,
        }
      };
    },
    controlChanged: function (state, { payload }) {
      const { controlData } = payload;
      return {
        ...state,
        data: {
          ...state.data,
          controlData: controlData,
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
