import React, { PureComponent } from 'react';

import { Modal, Table, Descriptions, Avatar } from '@arco-design/web-react';
import { Map, Marker, Polyline } from 'react-amap';

import { informationModalTableColumns } from '../../common';

export default class MapComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.markerEvents = {
      click: (e) => {
        // 记录当前点击的车的索引
        this.index = e.target.De.extData.markerIndex;
        // 实时更新车的ID
        this.title = this.props.markerData[this.index].id;
        // 实时更新车的位置
        this.position = this.props.markerData[this.index].loc[0];
        // 实时更新车的路径
        this.passedPath = this.props.markerData[this.index].information.passedPath;
        console.log(this.passedPath);
        // 实时更新车的任务完成信息
        this.informationModalTableData = this.props.markerData[this.index].information.modalTableData;
        // 实时更新司机信息
        this.driverInformation = this.props.markerData[this.index].information.driverInformation;
        // 实时更新司机照片
        this.avatarImageUrl = this.props.markerData[this.index].information.avatarImageUrl;
        this.setState({ visible: !this.state.visible });
      }
    };
    // 当前被点击的Marker的次序
    this.index = 0;
    // Modal的title, 表示车的id
    this.title = '';
    // 车的位置初始化
    this.position = [0, 0];
    // 任务完成信息
    this.informationModalTableData = [];
    // 司机信息
    this.driverInformation = {};
    // 司机照片
    this.avatarImageUrl = '';
    // 车的路径
    this.passedPath = [];
  }

  render() {
    return (
      <div style={{ width: '99.9%', height: 800 }}>
        <Map
          center={{ longitude: 120.103405, latitude: 30.276716 }}
          zoom={15}
          mapStyle={'fresh'}
        >
          {
            this.props.markerData.map((item, index) => {
              return (
                <Marker
                  position={item.loc[0]}
                  clickable
                  events={this.markerEvents}
                  key={item.id}
                  extData={{ markerIndex: index }}
                >
                  <div
                    style={{
                      backgroundImage: `url('http://101.37.163.219:8080/images/${item.type}.png')`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      width: '30px',
                      height: '40px',
                      textAlign: 'center',
                      lineHeight: '40px'
                    }}
                  />
                </Marker>
              );
            })
          }
        </Map>
        <Modal
          title={'当前正在查看编号为 ' + this.title + ' 的垃圾承运车的详细信息'}
          visible={this.state.visible}
          footer={null}
          onCancel={() => {
            this.setState({ visible: false });
          }}
          style={{ width: '1000px', height: '700px' }}
        >
          <div style={{ width: '100%', height: '270px' }}>
            <Map
              center={{ longitude: this.position[0], latitude: this.position[1] }}
              zoom={15}>
              <Marker position={this.position} />
              <Polyline path={this.passedPath} />
            </Map>
          </div>
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <Table
              columns={informationModalTableColumns}
              data={this.informationModalTableData}
              virtualized
              scroll={{ y: 300 }}
              pagination={false}
              style={{ width: '50%' }}
            />
            <div style={{ marginLeft: 30, display: 'flex' }} >
              <Avatar size={120} shape={'square'} style={{ marginTop: 90 }}>
                <img alt='avatar' src={this.avatarImageUrl} />
              </Avatar>
              <Descriptions
                column={1}
                title='司机信息'
                data={this.driverInformation}
                labelStyle={{ paddingRight: 36 }}
                style={{ marginLeft: 30, marginTop: 40 }}
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
