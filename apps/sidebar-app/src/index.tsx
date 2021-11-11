import './public-path'
import {ConfigProvider} from "antd";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';

import 'antd/dist/antd.css';

const AppWrapper = (
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);

// 渲染应用
const render = (props: any) => {
  const { container } = props;
  const containerElement = container ? container.querySelector('#root') : document.querySelector('#root');
  ReactDOM.render(AppWrapper, containerElement);
}

// 到处 qiankun 需要的生命周期钩子
export const bootstrap = async () => {
  console.log('[sidebar-app] react app bootstraped');
}

export const mount = async (props: any) => {
  console.log('[sidebar-app] props from main framework', props);
  render(props);
}

export const unmount = async (props: any) => {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
