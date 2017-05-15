import React, { PropTypes } from 'react';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './draggableDialog.less';

const DraggableDialog = ({
  dragSize,
  dispatch,
}) => {

  const dragRange = {
    top: 0,
    left: 0,
    right: dragSize.dragWidth,
    bottom: dragSize.dragHeight,
  };

  return (
    <Draggable bounds={dragRange} handle="strong">
      <div className="box no-cursor">
        <strong className="cursor"><Button icon="close" size={'small'} /></strong>
        <div>You must click my handle to drag me</div>
      </div>
    </Draggable>
  )
}


DraggableDialog.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    dragSize: state.draggableDialog.dragSize,
  };
}

export default connect(mapStateToProps)(DraggableDialog);

