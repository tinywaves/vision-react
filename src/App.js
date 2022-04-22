import React, { useEffect, useState } from 'react';

import { Decoration8 } from '@jiaminghi/data-view-react';
import TopBar from './components/top-bar';
import DataOverView from './components/data-overview';
import ScrollRecord from './components/scroll-record';
import WasteProduced from './components/waste-produced';
import MapComponent from './components/map-component';
import GarbageTrend from './components/garbage-trend';
import TruckSurplus from './components/truck-surplus';
import TrashStock from './components/trash-stock';
import TaskCompletion from './components/task-completion';
import AppStyles from './styles/app-styles';

import WebSocketService from './services';
import { initData, descriptionFormat } from './common';
import { driverInformationObject } from './utils';

import '@arco-design/web-react/dist/css/arco.css';

export default function App() {
  useEffect(() => {
    WebSocketService.Instance.registerCallback(getData);

    return () => {
      WebSocketService.Instance.unregisterCallback();
    };
  }, []);

  // 存储后台返回的数据
  const [screenData, setScreenData] = useState(initData);

  const getData = (resultData) => {
    // 数据处理
    for (let i = 0; i < resultData.markerData.length; i++) {
      // 处理司机信息
      const driverInformation = [];
      // 处理图像属性
      resultData.markerData[i].information.avatarImageUrl =
        resultData.markerData[i].information.driverInformation.avatarImageUrl;
      // 删除图像属性
      delete resultData.markerData[i].information.driverInformation.avatarImageUrl;
      // 删除onlyid属性
      delete resultData.markerData[i].information.driverInformation.onlyid;
      for (const key in resultData.markerData[i].information.driverInformation) {
        driverInformation.push(driverInformationObject(
          descriptionFormat[key],
          resultData.markerData[i].information.driverInformation[key]
        ));
      }
      resultData.markerData[i].information.driverInformation = driverInformation;
      // 删除visited属性
      for (let j = 0; j < resultData.markerData[i].information.passedPath.length; j++) {
        delete resultData.markerData[i].information.passedPath[j]['visited'];
      }
    }
    // 处理名称过长显示问题
    resultData.wasteProducedData.map((item) =>
      item.name = item.name.length > 4 ? item.name.slice(0, 4) + '...' : item.name
    );
    setScreenData(resultData);
  };

  return (
    <AppStyles>
      <TopBar duration={screenData.duration} />
      <div className="content">
        <div className="left">
          <DataOverView dataOverviewInformation={screenData.dataOverviewInformation} />
          <ScrollRecord recordData={screenData.recordData} />
          <WasteProduced wasteProducedData={screenData.wasteProducedData} />
        </div>
        <div className="center">
          <div className="line-map">
            <MapComponent markerData={screenData.markerData} />
          </div>
          <div className="garbage-trend-style">
            <GarbageTrend garbageTrendData={screenData.garbageTrendData} />
          </div>
        </div>
        <div className="right">
          <div className="garbage-truck-surplus">
            <TruckSurplus truckSurplusData={screenData.truckSurplusData} />
          </div>
          <div className="trash-stock">
            <TrashStock
              trashStockDataX={screenData.trashStockDataX}
              trashStockDataY={screenData.trashStockDataY}
            />
          </div>
          <div className="garbage-truck-finished">
            <TaskCompletion taskCompletionData={screenData.taskCompletionData} />
          </div>
        </div>
      </div>
      <div className="footer">
        <Decoration8
          style={{ width: '150px', height: '25px', marginLeft: '10px' }}
        />
        <Decoration8
          reverse={true}
          style={{ width: '150px', height: '25px', marginRight: '10px' }}
        />
      </div>
    </AppStyles>
  );
}
