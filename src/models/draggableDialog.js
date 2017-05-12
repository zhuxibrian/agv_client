'use strict';

const dragSizeInit = () => {
  return {
    width: (window.innerWidth - 240) * 0.1,
    height: (window.innerHeight - 160) * 0.3,
    dragWidth: (window.innerWidth - 240) * 0.8,
    dragHeight: (window.innerHeight - 160) * 0.65,
  };
};

export default {
  namespace: 'draggableDialog',
  state: {
    dragSize: {
      dialogWidth: dragSizeInit().width,
      dialogHeight: dragSizeInit().height,
      dragWidth: dragSizeInit().dragWidth,
      dragHeight: dragSizeInit().dragHeight,
    }
  },
  reducers: {},
  effects: {},
  subscriptions: {},
};
