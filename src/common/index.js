export const VISION_CONTENT = '垃圾调度平台数据概览';
export const WEEK = [
  '星期天',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六'
];
export const CAR_NUMBER = '当前工作车辆数/总车辆数';
export const TRASH_TRANSPORTED = '垃圾运输总量/吨';
export const DRIVING_COURSE = '垃圾车总行驶里程/千米';
export const COMMUNITY_PASSED = '经过社区总数';

// 仪表盘弧度配置
export const radius = ['0', '53%', '46%', '39%', '32%'];

// 大屏初始化数据
export const initData = {
  duration: 0,
  dataOverviewInformation: {
    carNumber: [[]],
    trashTransported: [],
    drivingCourse: [],
    communityPassed: []
  },
  recordData: [
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-']
  ],
  wasteProducedData: [
    {
      name: '-',
      value: 1
    },
    {
      name: '-',
      value: 1
    },
    {
      name: '-',
      value: 1
    },
    {
      name: '-',
      value: 1
    },
    {
      name: '-',
      value: 1
    }
  ],
  markerData: [],
  garbageTrendData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  truckSurplusData: [
    { value: 0, name: '-' },
    { value: 0, name: '-' },
    { value: 0, name: '-' },
    { value: 0, name: '-' },
    { value: 0, name: '-' }
  ],
  trashStockDataX: ['-', '-', '-', '-', '-', '-', '-', '-'],
  trashStockDataY: [0, 0, 0, 0, 0, 0, 0, 0],
  taskCompletionData: [
    {
      name: '-',
      value: 0,
    },
    {
      name: '-',
      value: 0,
    },
    {
      name: '-',
      value: 0,
    },
    {
      name: '-',
      value: 0,
    },
    {
      name: '-',
      value: 0,
    }
  ]
};

// 表格字段配置
export const informationModalTableColumns = [
  {
    title: '目的地次序',
    dataIndex: 'rank',
  },
  {
    title: '目的地',
    dataIndex: 'name',
  },
  {
    title: '是否完成垃圾装载',
    dataIndex: 'flag',
  }
];

// description数据格式化
export const descriptionFormat = {
  drivername: '司机姓名',
  id: '司机编号',
  driverCar: '装载车编号',
  driverPhone: '电话号码',
  mileage: '累计行驶里程',
  duration: '累计工作时长'
};
