'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'dva';
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
import layoutSVG from '../../assets/images/layout.svg';
import agvImg from '../../assets/images/agv.jpg';
import styles from './layoutPage.less';

TweenOne.plugins.push(PathPlugin);

const layoutPage = ({
  layoutSize,
  dispatch,
}) => {

  const path = `M3.5,175V19c0,0,1-8.75,8.25-11.5S26.5,8,26.5,8l54,53.25
      c0,0,7,8.25,14.5,0.75s51.5-52.25,51.5-52.25s9.75-7,18-2s7.75,11.5,7.75,11.5
      v104c0,0-0.5,15.75-15.25,15.75s-15.75-15-15.75-15V68.5c0,0-0.125-9.125-6-3.25
      s-36.25,36-36.25,36s-11.625,11.875-24-0.5S40.25,65.5,40.25,65.5
      s-5.75-5.25-5.75,2s0,107.25,0,107.25s-0.75,13.5-14.5,13.5S3.5,175,3.5,175z`;

  const path2 = 'm175,220l266,-1l0,97l726,-1l-726,1l0,-97l-266,1';

  const animation = {
    path: path2,
    repeat: -1,
    duration: 20000,
    ease: 'linear',
  };

  const divStyle = {
    // makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${layoutSVG})`,
    backgroundSize: 'cover',
    width: layoutSize.divWidth,
    height: layoutSize.divHeight,
  };

  const agvStyle = {
    backgroundImage: `url(${agvImg})`,
    backgroundSize: 'cover',
    width: '40px',
    height: '20px',
    margin: 0,
    transform: 'translate(-20px, 10px)',
  }

  return (
    <div id="layoutDiv" className={styles.normal}>
      <div style={divStyle}>
        <TweenOne
          animation={animation}
          style={agvStyle}
          className="code-box-shape"
          paused={false}
        />
        <svg width={layoutSize.divWidth} height={layoutSize.divHeight}>
          <path d={path2} fill="none" stroke="rgba(1, 155, 240, 0.2)" />
        </svg>
      </div>
    </div>
  );
}

layoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    layoutSize: state.layoutPage.layoutSize,
  };
}

export default connect(mapStateToProps)(layoutPage);

