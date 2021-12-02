import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import App from './App'
import {fetchUserId, fetchSignatures} from './api'
import config from './_config'
import {invokeResMock, mockUserId, wxResMock} from "./mock";
import {checkRedirect, createJsSdk, initSdk, initQiankunMainApp} from "./lib";

import 'antd/dist/antd.css';

export const jsSdk = createJsSdk(wxResMock, invokeResMock);

const AppWrapper = (
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
)

checkRedirect(config, fetchUserId, mockUserId) // 重定向获取 code（用户身份）
  .then(() => initSdk(jsSdk, config, fetchSignatures)) // 初始化 JsSdk
  .then(() => initQiankunMainApp(jsSdk)) // 初始化主应用，并注册好微应用
  .then(() => ReactDOM.render(AppWrapper, document.getElementById('root'))) // 渲染主应用内容
