/**
 * 城市垃圾趋势折线图option生成函数
 * @param {Array} data 每个数据点的数据
 * @returns 返回option
 */
export const garbageTrendOptionCreator = (data) => {
  return {
    title: {
      text: '城市垃圾趋势'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    grid: {
      top: 43,
      bottom: 65,
      left: 45,
      right: 10
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        rotate: 45
      },
      data: [
        '00:00',
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00'
      ]
    },
    yAxis: {
      type: 'value',
      axisPointer: {
        snap: true
      },
      splitNumber: 3,
      axisLine: {
        show: false
      }
    },
    series: [
      {
        type: 'line',
        smooth: false,
        cursor: 'pointer',
        data: data,
        lineStyle: {
          color: '#4397a5'
        },
        itemStyle: {
          color: '#4397a5'
        }
      }
    ]
  };
};

/**
 * 垃圾承运车任务完成度仪表盘option生成函数
 * @param {Array} data 垃圾承运车数据
 * @returns 返回option
 */
export const taskCompletionOptionCreator = (data) => {
  return {
    series: [
      {
        type: 'gauge',
        startAngle: -Math.PI / 2,
        endAngle: Math.PI * 1.13,
        arcLineWidth: 10,
        data: data,
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        pointer: {
          show: false
        },
        dataItemStyle: {
          lineCap: 'round'
        },
        backgroundArc: {
          show: false
        },
        details: {
          show: true,
          formatter: '{name}已完成任务{value}%',
          position: 'start',
          offset: [-10, 0],
          style: {
            fill: '#4397a5',
            fontSize: 12,
            textAlign: 'right'
          }
        }
      }
    ]
  };
};

/**
 * 社区现存垃圾总量柱状图option生成函数
 * @param {Array} x 社区现存垃圾总量柱状图optionX轴数据
 * @param {Array} y 社区现存垃圾总量柱状图optionY轴数据
 * @returns 返回option
 */
export const trashStockOptionCreator = (x, y) => {
  return {
    title: {
      text: ' 社区现存垃圾总量'
    },
    xAxis: {
      type: 'category',
      data: x,
      axisLabel: {
        interval: 0,
        formatter: function (value, index) {
          if (index % 2 !== 0) {
            return '\n\n' + value;
          }
          else {
            return value;
          }
        }
      }
    },
    yAxis: {
      type: 'value'
    },
    grid: {
      left: 42,
      right: 10,
      bottom: 60,
      top: 40
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        z: 0,
        lineStyle: {
          color: '#2D3443'
        }
      }
    },
    series: [
      {
        data: y,
        type: 'bar',
        barWidth: 15,
        itemStyle: {
          emphasis: {
            barBorderRadius: 20
          },
          normal: {
            barBorderRadius: 20
          }
        }
      }
    ]
  };
};

/**
 * 垃圾承运车剩余可容量饼图option生成函数
 * @param {Array} data 垃圾承运车剩余可容量饼图数据
 * @returns 返回option
 */
export const truckSurplusOptionCreator = (data) => {
  return {
    title: {
      text: '垃圾承运车剩余可容量',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    grid: {
      bottom: 0,
      top: 0
    },
    series: [
      {
        name: '剩余可容量',
        type: 'pie',
        radius: '70%',
        center: ['50%', '60%'],
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
};
