import 'babel-polyfill';

import React from 'react';
import ReactDom from 'react-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale-provider/zh_CN';
import reportWebVitals from './reportWebVitals';
import './index.less';
import App from './App';

ReactDom.render(
  <ConfigProvider locale={zh_CN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
