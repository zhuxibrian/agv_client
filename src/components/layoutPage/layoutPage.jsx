'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'dva';
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
import layoutSVG from '../../assets/images/layout.svg';
import agvImg from '../../assets/images/agv.jpg';
import styles from './layoutPage.less';
import DraggableDialog from '../draggableDialog/draggableDialog';

TweenOne.plugins.push(PathPlugin);

const layoutPage = ({
  layoutSize,
  dispatch,
}) => {

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
    margin: 'auto',
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
      <div style={{width: '0px', height: '0px', float: 'left' }}><DraggableDialog /></div>
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

