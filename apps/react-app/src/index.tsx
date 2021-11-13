import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// 渲染函数
const render = (props: any) => {
  const { container, user } = props;
  ReactDOM.render(<App user={user} />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

// qiankun 微应用的导出函数
export const bootstrap = async () => {
  console.log('[微应用 react-app] bootstrap');
}

export const mount = async (props: any) => {
  props.onGlobalStateChange((state: any) => {
    console.log('[微应用 react-app] onGlobalStateChange', state);
    render({
      ...props,
      ...state,
    })
  });

  console.log('[微应用 react-app] mount', props);
  render(props);
}

export const unmount = async (props: any) => {
  console.log('[微应用 react-app] unmount', props);
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
