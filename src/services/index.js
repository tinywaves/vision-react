import { URL } from './url';

// WebSocketService, 使用单例设计模式导出WebSocketService类
export default class WebSocketService {
  static instance = null;
  // 连接实例对象
  socketConnection = null;
  // 获取数据回调函数
  callbackFunction = null;

  static get Instance() {
    if (!this.instance) {
      this.instance = new WebSocketService();
    }
    return this.instance;
  }

  // 连接服务器函数
  connect() {
    if (!window.WebSocket) {
      return;
    }
    // 创建连接
    this.socketConnection = new WebSocket(URL);

    // 事件监听
    this.socketConnection.onopen = () => {
      console.log('连接成功');
    };
    this.socketConnection.onclose = () => {
      console.log('连接失败');
    };
    this.socketConnection.onmessage = ({ data }) => {
      const realData = JSON.parse(data);
      this.callbackFunction.call(this, realData);
      console.log(data);
    };
  }

  // 注册回调函数
  registerCallback(callback) {
    this.callbackFunction = callback;
  }

  // 取消注册回调函数
  unregisterCallback() {
    this.callbackFunction = null;
  }
}
