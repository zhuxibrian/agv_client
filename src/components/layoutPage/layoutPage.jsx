'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'dva';
import TweenOne from 'rc-tween-one';
import { Popover, Button } from 'antd';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
import layoutSVG from '../../assets/images/layout.svg';
import agvImg from '../../assets/images/agv.jpg';
import markImg from '../../assets/images/mark.png';
import controlNormalImg from '../../assets/images/control_normal.png';
import styles from './layoutPage.less';
import DraggableDialog from '../draggableDialog/draggableDialog';

TweenOne.plugins.push(PathPlugin);

const layoutPage = ({
  layoutSize,
  isDraggableShow,
  pageState,
  data,
  changeable,
  dispatch,
}) => {
  const path2 = 'm175,220l266,-1l0,97l726,-1l-726,1l0,-97l-266,1';
  const conflict = 'm175,400l300,0';

  const animation = {
    path: path2,
    repeat: -1,
    duration: 20000,
    ease: 'linear',
  };

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const divStyle = {
    // makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${layoutSVG})`,
    backgroundSize: 'cover',
    width: layoutSize.divWidth,
    height: layoutSize.divHeight,
    left: '50%',
    top: '50%',
    marginTop: -layoutSize.divHeight / 2,
    marginLeft: -layoutSize.divWidth / 2,
    position: 'absolute',
  };

  const agvStyle = {
    backgroundImage: `url(${agvImg})`,
    backgroundSize: 'cover',
    width: '40px',
    height: '20px',
    margin: '-20px 0px',
    transform: 'translate(-20px, 10px)',
  };

  const draggableDialog = () => {
    if (isDraggableShow) {
      return (
        <DraggableDialog />
      )
    }
    else {
      return null;
    }
  };

  const markShow = () => {
    const markStyle = (value) => {
      return {
        border: 'none',
        background: 'transparent',
        position: 'absolute',
        left: value.x * layoutSize.divWidth - 10,
        top: value.y * layoutSize.divHeight - 20,
        width: '20px',
        height: '20px',
        backgroundImage: `url(${markImg})`,
        backgroundSize: 'cover',
      };
    };

    if (pageState !== 'mark') return null;
    else {
      const markArray = [];
      data.markData.forEach((value, index) => {
        markArray.push(
          <Popover key={index} content={content} title="Title" trigger="click">
            <Button shape="circle" style={markStyle(value)} />
          </Popover>
        );
      });
      return (
        <div id="markDiv" onClick={handleMarkClick} style={{ ...divStyle, zIndex: '100' }}>
          {markArray}
        </div>
      );
    }
  }

  const controlShow = () => {
    const controlStyle = (value) => {
      return {
        border: 'none',
        background: 'transparent',
        position: 'absolute',
        left: value.x * layoutSize.divWidth - 10,
        top: value.y * layoutSize.divHeight - 10,
        width: '20px',
        height: '20px',
        backgroundImage: `url(${controlNormalImg})`,
        backgroundSize: 'cover',
      };
    };

    if (pageState !== 'control') {
      return null;
    }
    else {
      const controlArray = [];
      data.controlData.forEach((value, index) => {
        controlArray.push(
          <Popover key={index} content={content} title="Title" trigger="click">
            <Button shape="circle" style={controlStyle(value)} />
          </Popover>
        );
      });
      return (
        <div id="controlDiv" onClick={handleControlClick} style={{ ...divStyle, zIndex: '100' }}>
          {controlArray}
        </div>
      );
    }
  }

  const agvShow = () => {
    return (
      <div id="agvDiv" style={divStyle}>
        <TweenOne
          animation={animation}
          style={agvStyle}
          className="code-box-shape"
          paused={false}
        />
      </div>
    )
  }

  const pathShow = () => {
    if (pageState !== 'line') return null;
    else {
      return (
        <div id="pathDiv" style={divStyle}>
          <svg width="100%" height="100%">
            <path d={path2} fill="white" stroke="rgba(1, 155, 240, 0.6)" strokeWidth="2" />
          </svg>
        </div>
      )
    }
  }

  const conflictShow = () => {
    if (pageState !== 'conflict') return null;
    else {
      return (
        <div id="conflictDiv" style={divStyle}>
          <svg width="100%" height="100%">
            <path d={conflict} fill="white" stroke="rgba(240, 1, 1, 0.6)" strokeWidth="2" />
          </svg>
        </div>
      )
    }
  }

  const handleMarkClick = (e) => {
    if (changeable)
      dispatch({ type: 'data/addMarkData', payload: { event: e, markData: data.markData } });
  }

  const handleControlClick = (e) => {
    if (changeable)
      dispatch({ type: 'data/addControlData', payload: { event: e, controlData: data.controlData } });
  }


  return (
    <div id="layoutDiv" className={styles.normal}>
      {markShow()}
      {controlShow()}
      {agvShow()}
      {conflictShow()}
      {pathShow()}
      {draggableDialog()}
    </div>
  );
}

layoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    layoutSize: state.layoutPage.layoutSize,
    isDraggableShow: state.main.draggableShow,
    pageState: state.main.pageState,
    data: state.data.data,
    changeable: state.data.changeable,
  };
}

export default connect(mapStateToProps)(layoutPage);

