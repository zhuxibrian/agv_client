import React, { PropTypes } from 'react';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import { connect } from 'dva';
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
      <div className={styles.box}>
        <strong className={styles.cursor}><div>Drag here</div></strong>
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

