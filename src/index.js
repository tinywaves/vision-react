import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import WebSocketService from './services';

import './styles/global.css';

// 获取连接
WebSocketService.Instance.connect();
ReactDOM.render(<App />, document.getElementById('root'));
