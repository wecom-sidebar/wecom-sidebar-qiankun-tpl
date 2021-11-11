import './public-path'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 渲染应用
const render = (props: any) => {
  const { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
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
