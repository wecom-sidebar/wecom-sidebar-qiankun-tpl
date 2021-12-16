import './public-path'
import {ConfigProvider} from "antd";
import React from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom';
import App from './App';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';

import 'antd/dist/antd.css';
import store from "./store";

const AppWrapper = (
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
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
  console.log('[微应用 sidebar-app] bootstrap');
}

export const mount = async (props: any) => {
  props.onGlobalStateChange((state: any) => {
    // 将 jsSdk 更新到 store 中
    store.dispatch({ type: 'SET_ENTRY', payload: state.entry })
  });

  // 更新 jsSdk
  store.dispatch({ type: 'SET_ENTRY', payload: props.entry })

  console.log('[微应用 sidebar-app] mount', props);
  render(props);
}

export const unmount = async (props: any) => {
  console.log('[微应用 sidebar-app] unmount', props);
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
