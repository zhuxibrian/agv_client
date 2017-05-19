import React, { PropTypes } from 'react';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import { connect } from 'dva';
import { Button, Switch, Icon } from 'antd';
import styles from './draggableDialog.less';

const DraggableDialog = ({
  dragSize,
  changeable,
  dispatch,
}) => {

  const dragRange = {
    top: 0,
    left: 0,
    right: dragSize.dragWidth,
    bottom: dragSize.dragHeight,
  };

  const onChange = (checked) => {
    dispatch({ type: 'data/changeChangeable', payload: { changeable: checked } });
  }


  return (
    <Draggable bounds={dragRange} handle="strong">
      <div className="box no-cursor">
        <strong className="cursor" />
        <div className={styles.controlDiv}>
          <div style={{ flexGrow: '1' }}>
            <Switch onChange={onChange} checkedChildren={<Icon type="unlock" />} unCheckedChildren={<Icon type="lock" />} />
          </div>
          <Button icon="save" />
        </div>
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
    changeable: state.data.changeable,
  };
}

export default connect(mapStateToProps)(DraggableDialog);

