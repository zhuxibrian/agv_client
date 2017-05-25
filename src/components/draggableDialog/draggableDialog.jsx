import React, { PropTypes } from 'react';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import { connect } from 'dva';
import { Button, Switch, Icon, Select } from 'antd';
import styles from './draggableDialog.less';

const Option = Select.Option;

const DraggableDialog = ({
  dragSize,
  pageState,
  workSpace,
  setting,
  dispatch,
}) => {

  const dragRange = {
    top: 0,
    left: 0,
    right: dragSize.dragWidth,
    bottom: dragSize.dragHeight,
  };

  const handleWorkspaceChange = (value) => {
    dispatch({ type: 'data/changeCurrentWorkspace', payload: { currentWorkSpace: value } });
  };

  const handleLineChange = (value) => {
    dispatch({ type: 'data/changeCurrentLine', payload: { currentLine: value } });
  }

  const workspaceSelectOption = () => {
    const selectArray = [];
    let selectData = [];
    switch (pageState) {
      case 'line':
        selectData = workSpace;
        break;
      default:
        selectData = [];
    }
    const defaultValue = selectData.length > 0 ? selectData[0].name : null;
    selectData.forEach((value, index) => {
      selectArray.push(
        <Option key={index} value={index.toString()}>{selectData[index].name}</Option>
      )
    });
    return (
      <Select
        showSearch
        style={{ width: '90px' }}
        optionFilterProp="children"
        filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        defaultValue={defaultValue}
        onChange={handleWorkspaceChange}
      >
        {selectArray}
      </Select>
    )
  }

  const lineSelectOption = () => {
    const selectArray = [];
    let selectData = [];
    const ws = workSpace[setting.currentWorkSpace];
    switch (pageState) {
      case 'line':
        selectData = ws.lineData;
        break;
      default:
        selectData = [];
    }
    const defaultValue = selectData.length > 0 ? selectData[0].name : null;
    selectData.forEach((value, index) => {
      selectArray.push(
        <Option key={index} value={index.toString()}>{value.name}</Option>
      )
    });
    return (
      <Select
        showSearch
        style={{ width: '90px' }}
        optionFilterProp="children"
        filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        defaultValue={defaultValue}
        onChange={handleLineChange}
      >
        {selectArray}
      </Select>
    )
  }

  const onChangeableChange = (checked) => {
    dispatch({ type: 'data/changeChangeable', payload: { changeable: checked } });
  }

  return (
    <Draggable bounds={dragRange} handle="strong">
      <div className="box no-cursor">
        <strong className="cursor"><Icon type="setting" /></strong>
        <div className={styles.controlDiv}>
          <div className={styles.childDiv}>
            <p>操作锁：</p>
            <Switch defaultChecked={setting.changeable} onChange={onChangeableChange} checkedChildren={<Icon type="unlock" />} unCheckedChildren={<Icon type="lock" />} />
          </div>
          <div className={styles.childDivSpaceBetween}>
            <p>生产区：</p>
            {workspaceSelectOption()}
          </div>
          <div className={styles.childDivSpaceBetween}>
            <p>路线：</p>
            {lineSelectOption()}
          </div>
          <div className={styles.childDivFlexEnd}>
            <Button icon="plus-square-o" />
            <Button icon="setting" />
            <Button icon="save" />
          </div>
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
    workSpace: state.data.workSpace,
    setting: state.data.setting,
  };
}

export default connect(mapStateToProps)(DraggableDialog);

