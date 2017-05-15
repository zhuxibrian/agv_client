'use strict';

const ratioInit = () => {
  const ratioWidth = (window.innerWidth - 240) / 1920;
  const ratioHeight = (window.innerHeight - 160) / 1080;
  let ratio = ratioWidth > ratioHeight ? ratioHeight : ratioWidth;
  ratio = ratio < 0.4 ? 0.4 : ratio;
  return {
    width: ratio * 1920,
    height: ratio * 1080,
  };
};

export default {
  namespace: 'layoutPage',
  state: {
    layoutSize: {
      divWidth: ratioInit().width,
      divHeight: ratioInit().height,
    },
  },
  subscriptions: {
    setup: function ({ dispatch }) {
      window.addEventListener('resize', () => {
        dispatch({ type: 'changeSize', payload: { currentWidth: window.innerWidth, currentHeight: window.innerHeight } });
      });
    },
  },
  effects: {
    changeSize: function* ({ payload }, { call, put }) {
      const { currentWidth, currentHeight } = payload;
      const ratioWidth = (currentWidth - 240) / 1920;
      const ratioHeight = (currentHeight - 160) / 1080;
      let ratio = ratioWidth > ratioHeight ? ratioHeight : ratioWidth;
      ratio = ratio < 0.4 ? 0.4 : ratio;
      yield put({
        type: 'saveLayoutSize', payload: {
          layoutWidth: ratio * 1920, layoutHeight: ratio * 1080,
        }
      });
    }
  },
  reducers: {
    saveLayoutSize: function (state, { payload }) {
      const { layoutWidth, layoutHeight } = payload;
      return {
        ...state,
        layoutSize: {
          divWidth: layoutWidth,
          divHeight: layoutHeight,
        }
      }
    }
  }
}
