'use strict';
import { getClickPercent } from '../utils/utils'

export default {
  namespace: 'data',
  state: {
    setting: {
      changeable: false,
      currentWorkSpace: 0,
      currentLine: 0,
    },
    workSpace: [
      {
        name: '生产区1',
        svg: 'layout.svg',
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
          { name: 'Line1', point: [{ x: 0.36, y: 0.56, isReal: true, markIndex: 1 }, { x: 0.563, y: 0.369, isReal: false, markIndex: 1 }, { x: 0.222, y: 0.669, isReal: true, markIndex: 1 }] },
          { name: 'Line2', point: [{ x: 0.456, y: 0.56, isReal: true, markIndex: 1 }, { x: 0.563, y: 0.369, isReal: true, markIndex: 1 }, { x: 0.566, y: 0.777, isReal: true, markIndex: 1 }] },
        ],
      },
      {
        name: '生产区2',
        svg: 'layout2.svg',
        markData: [
          { x: 0.6, y: 0.7 },
          { x: 0.53, y: 0.69 },
          { x: 0.788, y: 0.222 },
        ],
        controlData: [
          { x: 0.4, y: 0.4 },
          { x: 0.73, y: 0.29 },
          { x: 0.788, y: 0.522 },
        ],
        lineData: [
          { name: 'Line1', point: [{ x: 0.44, y: 0.66, isReal: true, markIndex: 1 }, { x: 0.563, y: 0.369, isReal: true, markIndex: 1 }, { x: 0.777, y: 0.111, isReal: true, markIndex: 1 }] },
          { name: 'Line2', point: [{ x: 0.66, y: 0.77, isReal: true, markIndex: 1 }, { x: 0.777, y: 0.444, isReal: true, markIndex: 1 }, { x: 0.333, y: 0.888, isReal: true, markIndex: 1 }] },
        ],
      },
    ],
  },
  subscriptions: {},
  effects: {
    addVirtualPathPoint: function* ({ payload }, { put }) {
      const { event, cWorkSpace, cSetting } = payload;
      const { x, y } = getClickPercent(event);
      cWorkSpace[cSetting.currentWorkSpace].lineData[cSetting.currentLine].point.push({ x, y, isReal: false });
      yield put({ type: 'workSpaceChanged', payload: { cWorkSpace } });
    },
    addRealPathPoint: function* ({ payload }, { put }) {
      const { x, y, cWorkSpace, cSetting, markIndex } = payload;
      cWorkSpace[cSetting.currentWorkSpace].lineData[cSetting.currentLine].point.push({ x, y, isReal: true, markIndex });
      yield put({ type: 'workSpaceChanged', payload: { cWorkSpace } });
    },
    addMarkData: function* ({ payload }, { put }) {
      const { event, cWorkSpace, cSetting } = payload;
      const { x, y } = getClickPercent(event);
      cWorkSpace[cSetting.currentWorkSpace].markData.push({ x, y });
      yield put({ type: 'workSpaceChanged', payload: { cWorkSpace } });
    },
    addControlData: function* ({ payload }, { put }) {
      const { event, cWorkSpace, cSetting } = payload;
      const { x, y } = getClickPercent(event);
      cWorkSpace[cSetting.currentWorkSpace].controlData.push({ x, y });
      yield put({ type: 'workSpaceChanged', payload: { cWorkSpace } });
    },
    changeChangeable: function* ({ payload }, { put }) {
      const { changeable } = payload;
      yield put({ type: 'changeableChanged', payload: { changeable } });
    },
    changeCurrentWorkspace: function* ({ payload }, { put }) {
      const { currentWorkSpace } = payload;
      yield put({ type: 'currentWorkspaceChanged', payload: { currentWorkSpace } });
    },
    changeCurrentLine: function* ({ payload }, { put }) {
      const { currentLine } = payload;
      yield put({ type: 'currentLineChanged', payload: { currentLine } });
    },
  },
  reducers: {
    currentLineChanged: function (state, { payload }) {
      const { currentLine } = payload;
      return {
        ...state,
        setting: {
          ...state.setting,
          currentLine,
        }
      }
    },
    currentWorkspaceChanged: function (state, { payload }) {
      const { currentWorkSpace } = payload;
      return {
        ...state,
        setting: {
          ...state.setting,
          currentWorkSpace,
        }
      }
    },
    workSpaceChanged: function (state, { payload }) {
      const { cWorkSpace } = payload;
      return {
        ...state,
        setting: {
          ...state.setting,
        },
        workSpace: cWorkSpace,
      };
    },
    changeableChanged: function (state, { payload }) {
      const { changeable } = payload;
      return {
        ...state,
        setting: {
          ...state.setting,
          changeable: changeable,
        }
      };
    },
  },

};
