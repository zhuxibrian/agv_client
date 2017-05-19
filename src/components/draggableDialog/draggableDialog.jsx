import React, { PropTypes } from 'react';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import { connect } from 'dva';
import { Button, Switch, Icon, Select } from 'antd';
import styles from './draggableDialog.less';

const Option = Select.Option;

const DraggableDialog = ({
  dragSize,
  pageState,
  data,
  dispatch,
}) => {

  const dragRange = {
    top: 0,
    left: 0,
    right: dragSize.dragWidth,
    bottom: dragSize.dragHeight,
  };

  const selectOption = () => {
    const selectArray = [];
    let selectData = [];
    switch (pageState) {
      case 'line':
        selectData = data.lineData;
        break;
      default:
        selectData = [];
    }
    selectData.forEach((value, index) => {
      selectArray.push(
        <Option value={value.name}>{value.name}</Option>
      )
    });
    return selectArray;
  }

  const onChange = (checked) => {
    dispatch({ type: 'data/changeChangeable', payload: { changeable: checked } });
  }

  return (
    <Draggable bounds={dragRange} handle="strong">
      <div className="box no-cursor">
        <strong className="cursor" />
        <div className={styles.controlDiv}>
          <div className={styles.selectDiv}>
            <Switch onChange={onChange} checkedChildren={<Icon type="unlock" />} unCheckedChildren={<Icon type="lock" />} />
            <Select
              showSearch
              style={{ width: '100px' }}
              optionFilterProp="children"
              filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              {selectOption()}
            </Select>
          </div>
          <Button icon="setting" />
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
    pageState: state.main.pageState,
    data: state.data.data,
  };
}

export default connect(mapStateToProps)(DraggableDialog);

