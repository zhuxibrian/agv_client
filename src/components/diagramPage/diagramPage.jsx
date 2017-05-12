'use strict';

import React from 'react';
import ReactEcharts from 'echarts-for-react';
import styles from './diagramPage.less';
require('echarts-liquidfill');

const DiagramPage = () => {

  const getAgvTimeOption = () => {
    const option = {
      title: {
        text: '7日AGV运行时长',
        subtext: '单位:小时',
        x: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['AGV 1', 'AGV 2', 'AGV 3', 'AGV 4', 'AGV 5'],
      },
      series: [
        {
          name: 'AGV ID',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: 'AGV 1' },
            { value: 310, name: 'AGV 2' },
            { value: 234, name: 'AGV 3' },
            { value: 135, name: 'AGV 4' },
            { value: 1548, name: 'AGV 5' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            }
          }
        }
      ]
    };
    return option;
  }

  const getCallCountOption = () => {
    const option = {
      title: {
        text: '7日AGV响应次数'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['AGV 1', 'AGV 2', 'AGV 3'],
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['28', '29', '30', '1', '2', '3', '4']
        }
      ],
      yAxis: [
        {
          type: 'value',
        }
      ],
      series: [
        {
          name: 'AGV 1',
          type: 'line',
          stack: '总数',
          areaStyle: { normal: {} },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'AGV 2',
          type: 'line',
          stack: '总数',
          areaStyle: { normal: {} },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'AGV 3',
          type: 'line',
          stack: '总数',
          areaStyle: { normal: {} },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
      ]
    };
    return option;
  };

  const getErrorCountOption = () => {
    const option = {
      title: {
        text: '7日AGV故障次数'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['AGV 1', 'AGV 2', 'AGV 3'],
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['28', '29', '30', '1', '2', '3', '4']
        }
      ],
      yAxis: [
        {
          type: 'value',
        }
      ],
      series: [
        {
          name: 'AGV 1',
          type: 'line',
          stack: '总数',
          areaStyle: { normal: {} },
          data: [1, 0, 2, 1, 3, 1, 0],
        },
        {
          name: 'AGV 2',
          type: 'line',
          stack: '总数',
          areaStyle: { normal: {} },
          data: [2, 3, 0, 4, 1, 0, 0],
        },
        {
          name: 'AGV 3',
          type: 'line',
          stack: '总数',
          areaStyle: { normal: {} },
          data: [0, 0, 1, 2, 0, 0, 1],
        },
      ]
    };
    return option;
  };

  const getErrorTypeOption = () => {
    const option = {
      title: {
        text: '7日AGV故障类型'
      },
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['出轨', '通讯中断', '碰撞', '其他'],
          axisTick: {
            alignWithLabel: true,
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          type: 'bar',
          barWidth: '60%',
          data: [3, 1, 2, 4],
        }
      ]
    };
    return option;
  }

  const getLoadRateOption = () => {
    const option = {
      title: {
        text: '7日负荷率统计'
      },
      series: [{
        type: 'liquidFill',
        data: [0.6],
      }]
    };

    return option;
  }

  const getTrafficControlOption = () => {
    const option = {
      title: {
        text: '7日交通管制统计',
        subtext: '单位:次',
        x: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['管制区 1', '管制区 2', '管制区 3', '管制区 4'],
      },
      series: [
        {
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 15, name: '管制区 1' },
            { value: 23, name: '管制区 2' },
            { value: 10, name: '管制区 3' },
            { value: 1, name: '管制区 4' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            }
          }
        }
      ]
    };
    return option;
  }

  return (
    <div className={styles.diagramPageNormal}>
      <ReactEcharts // 7日AGV运行时长统计
        option={getAgvTimeOption()}
        className={styles.echarts}
      />
      <ReactEcharts // 7日AGV响应次数统计
        option={getCallCountOption()}
        className={styles.echarts}
      />
      <ReactEcharts // 7日故障次数统计
        option={getErrorCountOption()}
        className={styles.echarts}
      />
      <ReactEcharts // 7日故障类型统计
        option={getErrorTypeOption()}
        className={styles.echarts}
      />
      <ReactEcharts // 7日负荷率统计
        option={getLoadRateOption()}
        className={styles.echarts}
      />
      <ReactEcharts // 7日交通管制统计
        option={getTrafficControlOption()}
        className={styles.echarts}
      />
    </div>
  );
}

export default DiagramPage;
