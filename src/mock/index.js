// TODO:当前系统已经运行的时长
export const duration = 5;
// TODO:四个统计数据概览
export const dataOverviewInformation = {
  carNumber: [[5, 10]],
  trashTransported: [1234565],
  drivingCourse: [5556421],
  communityPassed: [89]
};
// TODO:轮播表数据
export const recordData = [
  ['15:56:30', '23', '浙江工业大学', '1/4'],
  ['行2列1', '行2列2', 'qqq'],
  ['行3列1', '行3列2', '行3列3'],
  ['行4列1', '行4列2', '行4列3'],
  ['行5列1', '行5列2', '行5列3'],
  ['行6列1', '行6列2', '行6列3'],
  ['行7列1', '行7列2', '行7列3']
];
// TODO:社区产生垃圾排行数据
export const wasteProducedData = [
  {
    name: '周口',
    value: 55
  },
  {
    name: '南阳',
    value: 120
  },
  {
    name: '西峡',
    value: 71
  },
  {
    name: '驻马店',
    value: 66
  },
  {
    name: '新乡',
    value: 80
  }
];
// TODO:地图坐标点
export const markerData = [
  {
    id: 'aaa',
    loc: [[120.10414, 30.278547]],
    type: '6B7785',
    color: '#6B7785',
    information: {
      modalTableData: [
        {
          key: '3',
          rank: '3',
          name: 'C',
          flag: '❌'
        },
        {
          key: '4',
          rank: '4',
          name: 'D',
          flag: '❌'
        },
        {
          key: '5',
          rank: '5',
          name: 'E',
          flag: '❌'
        },
        {
          key: '6',
          rank: '6',
          name: 'F',
          flag: '❌'
        },
        {
          key: '7',
          rank: '7',
          name: 'G',
          flag: '❌'
        },
        {
          key: '8',
          rank: '8',
          name: 'H',
          flag: '❌'
        },
        {
          key: '9',
          rank: '9',
          name: 'I',
          flag: '❌'
        },
        {
          key: '1',
          rank: '1',
          name: 'A',
          flag: '✔️'
        },
        {
          key: '2',
          rank: '2',
          name: 'B',
          flag: '✔️'
        }
      ],
      driverInformation: {
        driverName: '张三',
        driverPhone: '13333333333',
        driverCar: '123-12',
        driverId: '123-1234-1234',
        mileage: '1000KM',
        duration: '5h'
      },
      avatarImageUrl: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      passedPath: [
        {
          longitude: 120.10414,
          latitude: 30.278547
        },
        {
          longitude: 120.10414,
          latitude: 30.278547
        }
      ]
    }
  },
  {
    id: 'bbb',
    loc: [[120.107166, 30.28166]],
    type: '8D4EDA',
    color: '#8D4EDA'
  }
];
// TODO:城市垃圾趋势折线图数据点数据
export const garbageTrendData = [
  300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600,
  750, 800, 700, 600, 400, 400, 390, 380, 390
];
// TODO:垃圾承运车剩余可容量饼图数据
export const truckSurplusData = [
  { value: 1048, name: 'Search Engine', itemStyle: { color: '#f00' } },
  { value: 77, name: 'Direct' },
  { value: 580, name: 'Email' },
  { value: 484, name: 'Union Ads' },
  { value: 300, name: 'Video Ads' }
];
// TODO:社区现存垃圾总量柱状图X轴数据
export const trashStockDataX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'f'];
// TODO:社区现存垃圾总量柱状图Y轴数据
export const trashStockDataY = [
  120,
  {
    value: 200,
    itemStyle: {
      color: '#a90000'
    }
  },
  150,
  80,
  70,
  110,
  130
];
// TODO:垃圾承运车任务完成度数据
export const taskCompletionData = [
  {
    name: 'A',
    value: 80,
    gradient: ['#03c2fd', '#1ed3e5', '#2fded6']
  },
  {
    name: 'B',
    value: 80,
    gradient: ['#03c2fd', '#1ed3e5', '#2fded6']
  },
  {
    name: 'C',
    value: 80,
    gradient: ['#03c2fd', '#1ed3e5', '#2fded6']
  },
  {
    name: 'D',
    value: 80,
    gradient: ['#03c2fd', '#1ed3e5', '#2fded6']
  },
  {
    name: 'E',
    value: 80,
    gradient: ['#03c2fd', '#1ed3e5', '#2fded6']
  }
];
// 表格数据
export const informationModalTableData = [
  {
    key: '3',
    rank: '3',
    name: 'C',
    flag: '❌'
  },
  {
    key: '4',
    rank: '4',
    name: 'D',
    flag: '❌'
  },
  {
    key: '5',
    rank: '5',
    name: 'E',
    flag: '❌'
  },
  {
    key: '6',
    rank: '6',
    name: 'F',
    flag: '❌'
  },
  {
    key: '7',
    rank: '7',
    name: 'G',
    flag: '❌'
  },
  {
    key: '8',
    rank: '8',
    name: 'H',
    flag: '❌'
  },
  {
    key: '9',
    rank: '9',
    name: 'I',
    flag: '❌'
  },
  {
    key: '1',
    rank: '1',
    name: 'A',
    flag: '✔️'
  },
  {
    key: '2',
    rank: '2',
    name: 'B',
    flag: '✔️'
  }
];
// 司机信息
export const driverInformation = [
  {
    label: '司机姓名',
    value: 'tinyRipple',
  },
  {
    label: '司机编号',
    value: '123-1234-1234',
  },
  {
    label: '装载车编号',
    value: '123-12'
  },
  {
    label: '电话号码',
    value: '17858415179',
  },
  {
    label: '累计行驶里程',
    value: '1000KM'
  },
  {
    label: '累计工作时长',
    value: '100h'
  }
];
// 司机头像
export const avatarImageUrl = '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp';
