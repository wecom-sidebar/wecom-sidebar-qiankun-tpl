import React from 'react'
import ReactDOM from 'react-dom'
import {ConfigProvider} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import App from './App'
import {fetchSignatures, fetchUserId} from './api'
import config from './_config'

import 'antd/dist/antd.css';
import {checkRedirect, initSdk} from "wecom-sidebar-jssdk";
import initQiankunMainApp from "./utils/initQiankunMainApp";
import {mockSdk} from "./mock";

// 自动 Mock
mockSdk();

const AppWrapper = (
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
)

checkRedirect(config, fetchUserId) // 重定向获取 code（用户身份）
  .then(() => initSdk(config, fetchSignatures)) // 初始化 JsSdk
  .then(() => initQiankunMainApp()) // 初始化主应用，并注册好微应用
  .finally(() => ReactDOM.render(AppWrapper, document.getElementById('root'))) // 渲染主应用内容
