import {initGlobalState, MicroAppStateActions, registerMicroApps, start} from "qiankun";
import {JsSDK} from "../jsSdk";
export const subAppContainerId = 'sub-app-container';
export const subAppContainer = `#${subAppContainerId}`;

// 初始化 state
export const microAppStateActions: MicroAppStateActions = initGlobalState({});

// 获取需要传递给微应用的 props
const initPassProps = async (jsSdk: JsSDK) => {
  const res = await jsSdk.invoke<{ chatId: string }>('getCurExternalChat');
  return {
    jsSdk,
    isChat: !!res
  }
}

// 启动 qiankun 的主应用
const initQiankunMainApp = (jsSdk: JsSDK) => {
  const passProps = initPassProps(jsSdk);

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
      props: passProps
    },
    {
      name: 'sidebar-app',
      entry: '//localhost:3002',
      container: subAppContainer,
      activeRule: '/#/sidebar-app',
      props: passProps
    }
  ]);

  // 启动主应用
  start();
}

// 初始化主应用内容
export default initQiankunMainApp;
