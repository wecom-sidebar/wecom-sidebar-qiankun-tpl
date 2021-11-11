import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 渲染函数
const render = (props: any) => {
  const { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

// qiankun 微应用的导出函数
export const bootstrap = async () => {
  console.log('[react16] react app bootstraped');
}

export const mount = async (props: any) => {
  console.log('[react16] props from main framework', props);
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
