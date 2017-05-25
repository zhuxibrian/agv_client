'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'dva';
import TweenOne from 'rc-tween-one';
import { Popover, Button } from 'antd';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
import agvImg from '../../assets/images/agv.jpg';
import styles from './layoutPage.less';
import DraggableDialog from '../draggableDialog/draggableDialog';
import MyPath from '../myPath';
import MyMark from '../myMark';
import MyControl from '../myControl';
import MyVirtualMark from '../myVirtualMark';

import { pathToString } from '../../utils/utils';

TweenOne.plugins.push(PathPlugin);

const layoutPage = ({
  layoutSize,
  isDraggableShow,
  pageState,
  workSpace,
  setting,
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

  const layoutImage = (() => {
    const workSpaceShow = workSpace[setting.currentWorkSpace];
    const svgPath = workSpaceShow.svg;
    return require('../../assets/images/' + svgPath);
  })(layoutImage);

  const divStyle = {
    // makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${layoutImage})`,
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
    if (pageState === 'mark') {
      const markData = workSpace[setting.currentWorkSpace].markData;
      const markArray = [];
      const markProps = {
        changeable: setting.changeable,
        layoutSize,
        pageState,
      }
      markData.forEach((value, index) => {
        markArray.push(
          <MyMark key={index} value={value} index={index} markProps={markProps} />
        );
      });
      return (
        <div id="markDiv" onClick={handleMarkClick} style={{ ...divStyle, zIndex: '100' }}>
          {markArray}
        </div>
      );
    }
    else return null;
  }

  const controlShow = () => {
    if (pageState !== 'control') {
      return null;
    }
    else {
      const controlData = workSpace[setting.currentWorkSpace].controlData;
      const controlArray = [];
      controlData.forEach((value, index) => {
        controlArray.push(
          <MyControl key={index} value={value} index={index} layoutSize={layoutSize} />
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
      const cwp = setting.currentWorkSpace;
      const pathString = pathToString(
        workSpace[cwp].lineData[setting.currentLine].point,
        layoutSize.divWidth,
        layoutSize.divHeight,
      );
      const myPathProps = {
        layoutSize,
        pathString,
      };

      const markData = workSpace[cwp].markData;
      const markArray = [];
      const markProps = {
        changeable: setting.changeable,
        layoutSize,
        pageState,
      }
      markData.forEach((value, index) => {
        markArray.push(
          <MyMark key={index} value={value} index={index} markProps={markProps} handleClick={handlePathMarkClick} />
        );
      });

      const linePoints = workSpace[cwp].lineData[setting.currentLine].point;
      const virtualMarkArray = [];
      linePoints.forEach((value, index) => {
        if (!value.isReal) {
          virtualMarkArray.push(
            <MyVirtualMark key={index} value={value} index={index} markProps={markProps} />
          );
        }
      });

      return (
        <div onClick={handlePathDivClick} style={divStyle}>
          <MyPath myPathProps={myPathProps} />
          {markArray}
          {virtualMarkArray}
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
            <path d={conflict} fillOpacity="0" fill="white" stroke="rgba(240, 1, 1, 0.6)" strokeWidth="2" />
          </svg>
        </div>
      )
    }
  }

  const handlePathDivClick = (e) => {
    if (setting.changeable) {
      const cWorkSpace = workSpace;
      const cSetting = setting;
      dispatch({ type: 'data/addVirtualPathPoint', payload: { event: e, cWorkSpace, cSetting } });
    }
  }

  const handlePathMarkClick = (x, y, markIndex) => {
    if (setting.changeable) {
      const cWorkSpace = workSpace;
      const cSetting = setting;
      dispatch({ type: 'data/addRealPathPoint', payload: { x, y, cWorkSpace, cSetting, markIndex } });
    }
  }

  const handleMarkClick = (e) => {
    if (setting.changeable) {
      const cWorkSpace = workSpace;
      const cSetting = setting;
      dispatch({ type: 'data/addMarkData', payload: { event: e, cWorkSpace, cSetting } });
    }
  }

  const handleControlClick = (e) => {
    if (setting.changeable) {
      const cWorkSpace = workSpace;
      const cSetting = setting;
      dispatch({ type: 'data/addControlData', payload: { event: e, cWorkSpace, cSetting } });
    }
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
    workSpace: state.data.workSpace,
    setting: state.data.setting,
  };
}

export default connect(mapStateToProps)(layoutPage);

