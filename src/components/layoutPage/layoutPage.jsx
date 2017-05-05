'use strict';

import React from 'react';
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
import layoutSVG from '../../assets/images/layout.svg';

TweenOne.plugins.push(PathPlugin);

const layoutPage = () => {
  const divStyle = {
    // makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${layoutSVG})`,
    backgroundSize: 'cover',
    position: 'fixed',
    left: '210',
    top: '74',
    right: '10',
    bottom: '10',
  };
  return (
      <div style={divStyle}>
      </div>
  );
};

export default layoutPage;
