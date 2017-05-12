'use strict';

import React from 'react';
import { Table } from 'antd';
import styles from './listPage.less';

const ListPage = () => {

  const todoColumns = [
    { title: 'Controller', dataIndex: 'controller', key: 'controller', width: 100 },
    { title: 'Message', dataIndex: 'message', key: 'message', width: 100 },
    { title: 'Datetime', dataIndex: 'datetime', key: 'datetime', width: 120 },
    { title: 'Action', dataIndex: '', key: 'x', render: () => <a href="#">Delete</a> },
  ];

  const doingColums = [
    { title: 'Controller', dataIndex: 'controller', key: 'controller', width: 100 },
    { title: 'Message', dataIndex: 'message', key: 'message', width: 100 },
    { title: 'AGV', dataIndex: 'agv', key: 'agv', width: 100 },
    { title: 'Datetime', dataIndex: 'datetime', key: 'datetime' },
  ];

  const conflictColums = [
    { title: 'AGV', dataIndex: 'agv', key: 'agv', width: 100 },
    { title: 'Space', dataIndex: 'space', key: 'space', width: 100 },
    { title: 'Datetime', dataIndex: 'datetime', key: 'datetime' },
  ];

  const agvColumns = [
    { title: 'AGV', dataIndex: 'agv', key: 'agv', width: 120 },
    { title: 'WorkSpace', dataIndex: 'workSpace', key: 'workSpace', width: 120 },
    { title: 'Line', dataIndex: 'line', key: 'line', width: 120 },
    { title: 'Mark', dataIndex: 'mark', key: 'mark', width: 120 },
    { title: 'State', dataIndex: 'state', key: 'state', width: 120 },
    { title: 'Operation', dataIndex: '', key: 'x', render: () => <a href="#">operation</a> },
  ];

  const todoData = [
    { key: 1, controller: '叫料盒 1', message: '呼叫资材', datetime: '2017-5-10 9:22:21' },
    { key: 2, controller: '叫料盒 1', message: '呼叫资材', datetime: '2017-5-10 9:22:21' },
    { key: 3, controller: '叫料盒 1', message: '呼叫资材', datetime: '2017-5-10 9:22:21' },
    { key: 4, controller: '叫料盒 1', message: '呼叫资材', datetime: '2017-5-10 9:22:21' },
    { key: 5, controller: '叫料盒 1', message: '呼叫资材', datetime: '2017-5-10 9:22:21' },
    { key: 6, controller: '叫料盒 1', message: '呼叫资材', datetime: '2017-5-10 9:22:21' },
  ];

  const doingData = [
    { key: 1, controller: '叫料盒 1', message: '呼叫资材', agv: 'AGV 1', datetime: '2017-5-10 9:22:21' },
    { key: 2, controller: '叫料盒 1', message: '呼叫资材', agv: 'AGV 1', datetime: '2017-5-10 9:22:21' },
    { key: 3, controller: '叫料盒 1', message: '呼叫资材', agv: 'AGV 1', datetime: '2017-5-10 9:22:21' },
    { key: 4, controller: '叫料盒 1', message: '呼叫资材', agv: 'AGV 1', datetime: '2017-5-10 9:22:21' },
    { key: 5, controller: '叫料盒 1', message: '呼叫资材', agv: 'AGV 1', datetime: '2017-5-10 9:22:21' },
    { key: 6, controller: '叫料盒 1', message: '呼叫资材', agv: 'AGV 1', datetime: '2017-5-10 9:22:21' },
    { key: 8, controller: '叫料盒 1', message: '呼叫资材', agv: 'AGV 1', datetime: '2017-5-10 9:22:21' },
    { key: 9, controller: '叫料盒 1', message: '呼叫资材', agv: 'AGV 1', datetime: '2017-5-10 9:22:21' },
    { key: 10, controller: '叫料盒 1', message: '呼叫资材', agv: 'AGV 1', datetime: '2017-5-10 9:22:21' },
    { key: 11, controller: '叫料盒 1', message: '呼叫资材', agv: 'AGV 1', datetime: '2017-5-10 9:22:21' },
  ];

  const confilictData = [
    { key: 1, agv: 'AGV 1', space: '管制区 1', datetime: '2017-5-10 9:22:21' },
    { key: 2, agv: 'AGV 2', space: '管制区 1', datetime: '2017-5-10 9:22:21' },
    { key: 3, agv: 'AGV 3', space: '管制区 1', datetime: '2017-5-10 9:22:21' },
    { key: 4, agv: 'AGV 4', space: '管制区 1', datetime: '2017-5-10 9:22:21' },
  ];


  const agvData = [
    { key: 1, agv: 'AGV 1', workSpace: '产品线1', line: '1', mark: '2', state: '运行', agvType: 'LY3894', previousMark: '3', nextMark: '2', speed: '中速' },
    { key: 2, agv: 'AGV 1', workSpace: '产品线1', line: '1', mark: '2', state: '运行', agvType: 'LY3894', previousMark: '3', nextMark: '2', speed: '中速' },
    { key: 3, agv: 'AGV 1', workSpace: '产品线1', line: '1', mark: '2', state: '运行', agvType: 'LY3894', previousMark: '3', nextMark: '2', speed: '中速' },
    { key: 4, agv: 'AGV 1', workSpace: '产品线1', line: '1', mark: '2', state: '运行', agvType: 'LY3894', previousMark: '3', nextMark: '2', speed: '中速' },
    { key: 5, agv: 'AGV 1', workSpace: '产品线1', line: '1', mark: '2', state: '运行', agvType: 'LY3894', previousMark: '3', nextMark: '2', speed: '中速' },
  ];

  const discraption = record => {
    return (
      <div className={styles.discraptionDiv}>
        <p className={styles.discraptionP}>类型：{record.agvType}</p>
        <p className={styles.discraptionP}>上一地标：{record.previousMark}</p>
        <p className={styles.discraptionP}>下一地标:{record.nextMark}</p>
        <p className={styles.discraptionP}>速度等级:{record.speed}</p>
      </div>
    )
  };

  return (
    <div className={styles.listPageNormal}>
      <div className={styles.table1to3}>
        <div className={styles.tableTitle}>Todo List</div>
        <Table
          pagination={false}
          columns={todoColumns}
          dataSource={todoData}
          scroll={{ y: 240 }}
          size="middle"
        />
      </div>
      <div className={styles.table1to3}>
        <div className={styles.tableTitle}>Doing List</div>
        <Table
          pagination={false}
          columns={doingColums}
          dataSource={doingData}
          scroll={{ y: 300 }}
          size="middle"
        />
      </div>
      <div className={styles.table1to3}>
        <div className={styles.tableTitle}>Conflict</div>
        <Table
          pagination={false}
          columns={conflictColums}
          dataSource={confilictData}
          scroll={{ y: 300 }}
          size="middle"
        />
      </div>
      <div className={styles.table1to1}>
        <div className={styles.tableTitle}>AGV List</div>
        <Table
          pagination={false}
          columns={agvColumns}
          expandedRowRender={discraption}
          dataSource={agvData}
          scroll={{ y: 300 }}
          sytle={{ flexGrow: 1 }}
        />
      </div>
    </div>
  );
}

export default ListPage;
