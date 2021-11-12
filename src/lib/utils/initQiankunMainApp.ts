import {initGlobalState, MicroAppStateActions, registerMicroApps, start} from "qiankun";
import {JsSDK} from "../jsSdk";

export const subAppContainerId = 'sub-app-container';
export const subAppContainer = `#${subAppContainerId}`;

// 初始化 state
export const microAppStateActions: MicroAppStateActions = initGlobalState({
  msg: 'hello'
});

const initQiankunMainApp = (jsSdk: JsSDK) => {
  // 添加 state 变更
  microAppStateActions.onGlobalStateChange((state, prev) => {
    console.log('[主应用]', state, prev);
  });

  // 注册并启动微前端
  registerMicroApps([
    {
      name: 'react-app',
      entry: '//localhost:3001',
      container: subAppContainer,
      activeRule: '/#/react-app',
      props: {
        jsSdk,
      }
    },
    {
      name: 'sidebar-app',
      entry: '//localhost:3002',
      container: subAppContainer,
      activeRule: '/#/sidebar-app',
      props: {
        jsSdk,
      }
    }
  ]);

  // 启动主应用
  start();
}

// 初始化主应用内容
export default initQiankunMainApp;
